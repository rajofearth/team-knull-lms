import { v } from "convex/values";
import { formatDistanceToNowStrict } from "date-fns";
import type { CourseDetailsData } from "../lib/lms/types";
import type { Doc } from "./_generated/dataModel";
import type { QueryCtx } from "./_generated/server";
import { mutation, query } from "./_generated/server";
import { authComponent } from "./betterAuth/auth";
import { getViewerOrThrow, requireAdmin } from "./lib/auth";

const countryColors = ["#111827", "#374151", "#6B7280", "#9CA3AF", "#D1D5DB"];

function formatCount(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function mapCourseStatus(
  status: Doc<"courses">["status"],
): "Published" | "Draft" | "Archived" {
  if (status === "published") return "Published";
  if (status === "archived") return "Archived";
  return "Draft";
}

function normalizeLevel(
  level: Doc<"courses">["level"],
): "Beginner" | "Intermediate" | "Advanced" {
  if (level === "Beginner to Advanced") return "Advanced";
  return level;
}

async function listPublishedCourses(ctx: QueryCtx) {
  return await ctx.db
    .query("courses")
    .withIndex("status", (q) => q.eq("status", "published"))
    .collect();
}

export const makeAdmin = mutation({
  args: { userId: v.optional(v.string()) },
  handler: async (ctx, args) => {
    let userId = args.userId;

    if (!userId) {
      const user = await authComponent.getAuthUser(ctx);
      if (!user) {
        throw new Error("Not authenticated and no userId provided");
      }
      userId = user._id;
    }

    const existingProfile = await ctx.db
      .query("userProfiles")
      .withIndex("userId", (q) => q.eq("userId", userId))
      .unique();

    if (existingProfile) {
      await ctx.db.patch(existingProfile._id, { role: "admin" });
    } else {
      await ctx.db.insert("userProfiles", {
        userId,
        role: "admin",
      });
    }

    return { success: true };
  },
});

export const getViewerSession = query({
  args: {},
  handler: async (ctx) => {
    const viewer = await getViewerOrThrow(ctx);

    return {
      isAuthenticated: true,
      role: viewer.role,
      user: {
        id: viewer.user._id,
        name: viewer.user.name,
        email: viewer.user.email,
        image: viewer.user.image ?? null,
      },
    };
  },
});

export const listCatalogCourses = query({
  args: {},
  handler: async (ctx) => {
    const courses = await listPublishedCourses(ctx);

    return courses.map((course) => ({
      id: course._id,
      slug: course.slug,
      title: course.title,
      description: course.description,
      rating: course.rating,
      reviewsCount: course.reviewsCount,
      studentsCount: formatCount(course.studentsCount),
      level: course.level,
      duration: course.duration,
      thumbnail: course.thumbnail,
      badge: course.badge,
      price: course.price,
    }));
  },
});

export const getCourseDetails = query({
  args: {
    slug: v.string(),
  },
  handler: async (ctx, args) => {
    const viewer = await getViewerOrThrow(ctx);
    const course = await ctx.db
      .query("courses")
      .withIndex("slug", (q) => q.eq("slug", args.slug))
      .unique();

    if (!course) {
      return null;
    }

    if (course.status !== "published" && viewer.role !== "admin") {
      return null;
    }

    const [modules, resources, enrollment] = await Promise.all([
      ctx.db
        .query("courseModules")
        .withIndex("courseId_order", (q) => q.eq("courseId", course._id))
        .collect(),
      ctx.db
        .query("courseResources")
        .withIndex("courseId_order", (q) => q.eq("courseId", course._id))
        .collect(),
      ctx.db
        .query("enrollments")
        .withIndex("userId_courseId", (q) =>
          q.eq("userId", viewer.user._id).eq("courseId", course._id),
        )
        .unique(),
    ]);

    const lessonsByModule = new Map<string, Doc<"courseLessons">[]>();
    const completedLessonIds = new Set<string>();

    if (enrollment) {
      const lessonProgress = await ctx.db
        .query("lessonProgress")
        .withIndex("enrollmentId", (q) => q.eq("enrollmentId", enrollment._id))
        .collect();

      for (const item of lessonProgress) {
        if (item.completed) completedLessonIds.add(item.lessonId);
      }
    }

    for (const module of modules) {
      const lessons = await ctx.db
        .query("courseLessons")
        .withIndex("moduleId_order", (q) => q.eq("moduleId", module._id))
        .collect();

      lessonsByModule.set(module._id, lessons);
    }

    const instructors = await Promise.all(
      course.instructorIds.map(async (id) => {
        const instructor = await ctx.db.get(id);
        if (!instructor) return null;

        const relatedCourses = (
          await Promise.all(
            (
              await ctx.db.query("courses").collect()
            )
              .filter((candidate) =>
                candidate.instructorIds.some(
                  (instructorId) => instructorId === instructor._id,
                ),
              )
              .slice(0, 4)
              .map(async (candidate) => ({
                id: candidate.slug,
                title: candidate.title,
                thumbnail: candidate.thumbnail,
                price: candidate.price,
                rating: candidate.rating,
                studentsCount: formatCount(candidate.studentsCount),
              })),
          )
        ).filter(Boolean);

        const avatar = instructor.avatar.startsWith("http")
          ? instructor.avatar
          : ((await ctx.storage.getUrl(instructor.avatar)) ??
            instructor.avatar);

        return {
          id: String(instructor._id),
          name: instructor.name,
          role: instructor.role,
          avatar,
          bio: instructor.bio,
          stats: instructor.stats,
          coursesOnPlatform: relatedCourses,
        };
      }),
    );

    const flattenedLessons = Array.from(lessonsByModule.values()).flat();
    const fallbackLessonId =
      enrollment?.lastLessonId ?? flattenedLessons[0]?._id;
    const totalLessons = course.totalLessons || flattenedLessons.length;
    const lessonsCompleted =
      enrollment?.lessonsCompleted ?? completedLessonIds.size;

    return {
      id: course._id,
      slug: course.slug,
      title: course.title,
      description: course.description,
      rating: course.rating,
      reviewsCount: course.reviewsCount,
      studentsCount: formatCount(course.studentsCount),
      level: course.level,
      duration: course.duration,
      thumbnail: course.thumbnail,
      badge: course.badge,
      price: course.price,
      progress: {
        percentage:
          enrollment?.progressPercentage ??
          (totalLessons > 0
            ? Math.round((lessonsCompleted / totalLessons) * 100)
            : 0),
        lessonsCompleted,
        totalLessons,
        projectsCompleted: enrollment?.projectsCompleted ?? 0,
        totalProjects: course.totalProjects,
        quizScore: enrollment?.quizScore ?? 0,
        certificateAvailable: course.certificateEnabled,
      },
      resources: resources.map((resource) => ({
        id: resource._id,
        title: resource.title,
        type: resource.type,
        icon: resource.icon,
        url: resource.url,
        lessonId: resource.lessonId,
      })),
      modules: modules.map((module) => {
        const lessons = lessonsByModule.get(module._id) ?? [];
        const completed = lessons.filter((lesson) =>
          completedLessonIds.has(lesson._id),
        ).length;

        return {
          id: module._id,
          title: module.title,
          description: module.description,
          lessonsCompleted: completed,
          totalLessons: lessons.length,
          lessons: lessons.map((lesson) => ({
            id: lesson._id,
            title: lesson.title,
            duration: lesson.duration,
            isCompleted: completedLessonIds.has(lesson._id),
            isActive: lesson._id === fallbackLessonId,
            videoUrl: lesson.videoUrl,
            description: lesson.description,
            isPreview: lesson.isPreview,
          })),
        };
      }),
      overview: {
        whatYouWillLearn: course.whatYouWillLearn,
        requirements: course.requirements,
        detailedDescription: course.detailedDescription,
        features: course.features,
        whoThisCourseIsFor: course.whoThisCourseIsFor,
        syllabus: course.syllabus,
        applications: course.applications,
      },
      instructors: instructors.filter(
        (instructor) => instructor !== null,
      ) as CourseDetailsData["instructors"],
    };
  },
});

export const listAdminCourses = query({
  args: {},
  handler: async (ctx) => {
    await requireAdmin(ctx);
    const [courses, categories] = await Promise.all([
      ctx.db.query("courses").withIndex("createdAt").collect(),
      ctx.db.query("categories").collect(),
    ]);

    const categoriesById = new Map(
      categories.map((category) => [category._id, category]),
    );

    return await Promise.all(
      courses
        .sort((a, b) => b.createdAt - a.createdAt)
        .map(async (course) => {
          const instructor = course.instructorIds[0]
            ? await ctx.db.get(course.instructorIds[0])
            : null;

          return {
            id: course._id,
            title: course.title,
            subtitle: course.subtitle,
            thumbnail: course.thumbnail,
            instructor: {
              name: instructor?.name ?? "Team Knull",
              avatar: instructor?.avatar ?? "",
            },
            category: categoriesById.get(course.categoryId)?.name ?? "General",
            level: normalizeLevel(course.level),
            students: course.studentsCount,
            rating: course.rating,
            status: mapCourseStatus(course.status),
            createdAt: new Date(course.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
          };
        }),
    );
  },
});

export const getAdminCourse = query({
  args: { courseId: v.id("courses") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const course = await ctx.db.get(args.courseId);
    if (!course) return null;

    return {
      ...course,
      id: course._id,
    };
  },
});

export const getAdminInstructors = query({
  args: {},
  handler: async (ctx) => {
    await requireAdmin(ctx);
    const [instructors, courses, enrollments] = await Promise.all([
      ctx.db.query("instructors").withIndex("createdAt").collect(),
      ctx.db.query("courses").collect(),
      ctx.db.query("enrollments").collect(),
    ]);

    const instructorList = await Promise.all(
      instructors
        .sort((a, b) => b.createdAt - a.createdAt)
        .map(async (instructor) => {
          const instructorCourses = courses.filter((c) =>
            c.instructorIds.includes(instructor._id),
          );
          const totalEnrollments = instructorCourses.reduce(
            (sum, c) => sum + c.studentsCount,
            0,
          );

          const avatar = instructor.avatar.startsWith("http")
            ? instructor.avatar
            : ((await ctx.storage.getUrl(instructor.avatar)) ??
              instructor.avatar);

          return {
            id: instructor._id,
            name: instructor.name,
            handle: `@${instructor.slug}`,
            avatar,
            email: instructor.email ?? `${instructor.slug}@example.com`,
            courses: instructorCourses.length,
            enrollments: totalEnrollments,
            rating: instructor.stats.rating,
            status: (instructor.status as "Active" | "Inactive") ?? "Active",
            joinedDate: new Date(instructor.createdAt).toLocaleDateString(
              "en-US",
              {
                month: "short",
                day: "numeric",
                year: "numeric",
              },
            ),
          };
        }),
    );

    const totalInstructors = instructors.length;
    const activeInstructors = instructors.filter(
      (i) => (i.status as string) === "Active",
    ).length;
    const totalCourses = courses.length;
    const totalEnrollments = enrollments.length;
    const avgRating =
      instructors.reduce((sum, i) => sum + i.stats.rating, 0) /
      (instructors.length || 1);

    return {
      statCards: [
        {
          id: "total-instructors",
          label: "Total Instructors",
          value: formatCount(totalInstructors),
          badge: "+5.0%",
          secondary: "18.0%",
          trend: "up" as const,
          comparison: "vs previous month",
          icon: "user" as const,
        },
        {
          id: "active-instructors",
          label: "Active Instructors",
          value: formatCount(activeInstructors),
          badge: "+5.0%",
          secondary: "18.0%",
          trend: "up" as const,
          comparison: "vs previous month",
          icon: "book" as const,
        },
        {
          id: "total-courses",
          label: "Total Courses",
          value: formatCount(totalCourses),
          badge: "+8.1%",
          secondary: "18.0%",
          trend: "up" as const,
          comparison: "vs previous month",
          icon: "database" as const,
        },
        {
          id: "total-enrollments",
          label: "Total Enrollments",
          value: formatCount(totalEnrollments),
          badge: "+15.3%",
          secondary: "18.0%",
          trend: "up" as const,
          comparison: "vs previous month",
          icon: "mail" as const,
        },
        {
          id: "avg-rating",
          label: "Average Rating",
          value: avgRating.toFixed(1),
          badge: "+0.3",
          secondary: "18.0%",
          trend: "up" as const,
          comparison: "vs previous month",
          icon: "star" as const,
        },
      ],
      instructors: instructorList,
    };
  },
});

export const getAdminInstructor = query({
  args: { instructorId: v.id("instructors") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const instructor = await ctx.db.get(args.instructorId);
    if (!instructor) return null;

    const courses = await ctx.db.query("courses").collect();
    const instructorCourses = courses.filter((c) =>
      c.instructorIds.includes(instructor._id),
    );

    const avatar = instructor.avatar.startsWith("http")
      ? instructor.avatar
      : ((await ctx.storage.getUrl(instructor.avatar)) ?? instructor.avatar);

    return {
      ...instructor,
      id: instructor._id,
      avatar,
      assignedCourses: instructorCourses.map((c) => ({
        id: c._id,
        title: c.title,
      })),
    };
  },
});

export const addInstructor = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    role: v.string(),
    avatar: v.string(),
    bio: v.string(),
    slug: v.string(),
    status: v.union(v.literal("Active"), v.literal("Inactive")),
    phoneNumber: v.optional(v.string()),
    website: v.optional(v.string()),
    assignedCourseIds: v.optional(v.array(v.id("courses"))),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const { assignedCourseIds, ...instructorData } = args;

    const instructorId = await ctx.db.insert("instructors", {
      ...instructorData,
      stats: {
        courses: assignedCourseIds?.length || 0,
        rating: 5.0,
        students: "0",
        yearsExperience: "0",
      },
      createdAt: Date.now(),
    });

    if (assignedCourseIds && assignedCourseIds.length > 0) {
      await Promise.all(
        assignedCourseIds.map(async (courseId) => {
          const course = await ctx.db.get(courseId);
          if (course && !course.instructorIds.includes(instructorId)) {
            await ctx.db.patch(courseId, {
              instructorIds: [...course.instructorIds, instructorId],
            });
          }
        }),
      );
    }

    await ctx.db.insert("activityLogs", {
      type: "instructor",
      message: `Added new instructor: ${args.name}`,
      createdAt: Date.now(),
    });

    return instructorId;
  },
});

export const updateInstructor = mutation({
  args: {
    instructorId: v.id("instructors"),
    name: v.string(),
    email: v.string(),
    role: v.string(),
    avatar: v.string(),
    bio: v.string(),
    slug: v.string(),
    status: v.union(v.literal("Active"), v.literal("Inactive")),
    phoneNumber: v.optional(v.string()),
    website: v.optional(v.string()),
    assignedCourseIds: v.optional(v.array(v.id("courses"))),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const { instructorId, assignedCourseIds, ...data } = args;
    await ctx.db.patch(instructorId, data);

    if (assignedCourseIds !== undefined) {
      // Get all courses current assigned to this instructor
      const allCourses = await ctx.db.query("courses").collect();

      await Promise.all(
        allCourses.map(async (course) => {
          const isAssigned = assignedCourseIds.includes(course._id);
          const alreadyHas = course.instructorIds.includes(instructorId);

          if (isAssigned && !alreadyHas) {
            // Add to course
            await ctx.db.patch(course._id, {
              instructorIds: [...course.instructorIds, instructorId],
            });
          } else if (!isAssigned && alreadyHas) {
            // Remove from course
            await ctx.db.patch(course._id, {
              instructorIds: course.instructorIds.filter(
                (id) => id !== instructorId,
              ),
            });
          }
        }),
      );
    }

    await ctx.db.insert("activityLogs", {
      type: "update",
      message: `Updated instructor: ${args.name}`,
      createdAt: Date.now(),
    });
  },
});

export const addCourse = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    slug: v.string(),
    instructorIds: v.array(v.id("instructors")),
    status: v.union(
      v.literal("draft"),
      v.literal("published"),
      v.literal("archived"),
      v.literal("scheduled"),
    ),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const courseId = await ctx.db.insert("courses", {
      ...args,
      subtitle: "",
      detailedDescription: "",
      thumbnail:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      categoryId:
        (await ctx.db.query("categories").first())?._id ??
        ("" as Id<"categories">),
      level: "Beginner",
      duration: "0h",
      totalLessons: 0,
      totalProjects: 0,
      rating: 0,
      reviewsCount: 0,
      studentsCount: 0,
      price: 0,
      visibility: "public",
      pricingModel: "free",
      language: "English",
      tags: [],
      whatYouWillLearn: [],
      requirements: [],
      syllabus: [],
      applications: [],
      certificateEnabled: false,
      passingPercentage: 80,
      lifetimeAccess: true,
      downloadableResources: true,
      discussionEnabled: true,
      requireEnrollmentApproval: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    await ctx.db.insert("activityLogs", {
      type: "course",
      message: `Created course: ${args.title}`,
      createdAt: Date.now(),
    });

    return courseId;
  },
});

export const updateCourse = mutation({
  args: {
    courseId: v.id("courses"),
    title: v.optional(v.string()),
    description: v.optional(v.string()),
    slug: v.optional(v.string()),
    status: v.optional(
      v.union(
        v.literal("draft"),
        v.literal("published"),
        v.literal("archived"),
        v.literal("scheduled"),
      ),
    ),
    instructorIds: v.optional(v.array(v.id("instructors"))),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const { courseId, ...data } = args;
    await ctx.db.patch(courseId, {
      ...data,
      updatedAt: Date.now(),
    });

    await ctx.db.insert("activityLogs", {
      type: "update",
      message: `Updated course: ${args.title || "details"}`,
      createdAt: Date.now(),
    });
  },
});

export const getAdminDashboard = query({
  args: {},
  handler: async (ctx) => {
    await requireAdmin(ctx);

    const [courses, enrollments, instructors, profiles, logs] =
      await Promise.all([
        ctx.db.query("courses").collect(),
        ctx.db.query("enrollments").collect(),
        ctx.db.query("instructors").withIndex("createdAt").collect(),
        ctx.db.query("userProfiles").collect(),
        ctx.db.query("activityLogs").withIndex("createdAt").collect(),
      ]);

    const students = profiles.filter((profile) => profile.role === "student");
    const paidCourses = courses.filter((course) => course.price > 0);
    const revenue = enrollments.reduce((total, enrollment) => {
      const course = courses.find(
        (candidate) => candidate._id === enrollment.courseId,
      );
      return total + (course?.price ?? 0);
    }, 0);

    const topCourses = courses
      .slice()
      .sort((a, b) => b.studentsCount - a.studentsCount)
      .slice(0, 5)
      .map((course) => ({
        id: course.slug,
        title: course.title,
        enrollments: `${formatCount(course.studentsCount)} Enrollments`,
        rating: course.rating,
        thumbnail: course.thumbnail,
      }));

    const byCountry = new Map<string, number>();
    for (const student of students) {
      const country = student.location?.trim() || "Others";
      byCountry.set(country, (byCountry.get(country) ?? 0) + 1);
    }

    const studentsByCountry =
      byCountry.size > 0
        ? Array.from(byCountry.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([country, count], index) => ({
              country,
              percentage: Number(
                ((count / Math.max(students.length, 1)) * 100).toFixed(1),
              ),
              color: countryColors[index] ?? "#E5E7EB",
            }))
        : [
            { country: "United States", percentage: 32.5, color: "#111827" },
            { country: "India", percentage: 28.4, color: "#374151" },
            { country: "United Kingdom", percentage: 8.7, color: "#6B7280" },
            { country: "Canada", percentage: 6.7, color: "#9CA3AF" },
            { country: "Others", percentage: 23.7, color: "#D1D5DB" },
          ];

    const recentActivity =
      logs.length > 0
        ? logs
            .sort((a, b) => b.createdAt - a.createdAt)
            .slice(0, 5)
            .map((item) => ({
              id: item._id,
              type: item.type,
              message: item.message,
              time: formatDistanceToNowStrict(item.createdAt, {
                addSuffix: true,
              }),
            }))
        : [
            {
              id: "fallback-course",
              type: "course" as const,
              message: 'New course "Advanced TypeScript" was created',
              time: "2 minutes ago",
            },
            {
              id: "fallback-enrollment",
              type: "enrollment" as const,
              message: 'John Doe enrolled in "Web Development Bootcamp"',
              time: "10 minutes ago",
            },
            {
              id: "fallback-certificate",
              type: "certificate" as const,
              message: "Certificate issued to Jane Smith",
              time: "1 hour ago",
            },
          ];

    const enrollmentOverview = Array.from({ length: 14 }).map((_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - (13 - index));

      const count = enrollments.filter((enrollment) => {
        const enrolledAt = new Date(enrollment.enrolledAt);
        return (
          enrolledAt.getFullYear() === date.getFullYear() &&
          enrolledAt.getMonth() === date.getMonth() &&
          enrolledAt.getDate() === date.getDate()
        );
      }).length;

      return {
        date: date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        value: count,
      };
    });

    return {
      statCards: [
        {
          id: "total-students",
          label: "Total Students",
          value: formatCount(students.length),
          badge: "+12.5%",
          secondary: "18.0%",
          trend: "up" as const,
          comparison: "vs previous month",
          icon: "users" as const,
        },
        {
          id: "total-courses",
          label: "Total Courses",
          value: formatCount(courses.length),
          badge: "+8.1%",
          secondary: "18.0%",
          trend: "up" as const,
          comparison: "vs previous month",
          icon: "book" as const,
        },
        {
          id: "total-instructors",
          label: "Total Instructors",
          value: formatCount(instructors.length),
          badge: "+5.0%",
          secondary: "18.0%",
          trend: "up" as const,
          comparison: "vs previous month",
          icon: "user" as const,
        },
        {
          id: "enrollments",
          label: "Enrollments",
          value: formatCount(enrollments.length),
          badge: "+15.3%",
          secondary: "18.0%",
          trend: "up" as const,
          comparison: "vs previous month",
          icon: "monitor" as const,
        },
        {
          id: "revenue",
          label: "Revenue",
          value: `$${formatCount(revenue)}`,
          badge: paidCourses.length > 0 ? "+18.7%" : "0.0%",
          secondary: "18.7%",
          trend: "up" as const,
          comparison: "vs previous month",
          icon: "dollar" as const,
        },
      ],
      enrollmentOverview,
      topCourses,
      studentsByCountry,
      totalStudents: formatCount(students.length),
      newInstructors: instructors
        .slice()
        .sort((a, b) => b.createdAt - a.createdAt)
        .slice(0, 5)
        .map((instructor) => ({
          id: instructor._id,
          name: instructor.name,
          courses: courses.filter((course) =>
            course.instructorIds.some((id) => id === instructor._id),
          ).length,
          joinedDate: new Date(instructor.createdAt).toLocaleDateString(
            "en-US",
            {
              month: "short",
              day: "numeric",
              year: "numeric",
            },
          ),
          avatar: instructor.avatar,
        })),
      recentActivity,
    };
  },
});

export const getStudentDashboard = query({
  args: {},
  handler: async (ctx) => {
    const viewer = await getViewerOrThrow(ctx);

    const [profile, enrollments, certificates, logs] = await Promise.all([
      ctx.db
        .query("userProfiles")
        .withIndex("userId", (q) => q.eq("userId", viewer.user._id))
        .unique(),
      ctx.db
        .query("enrollments")
        .withIndex("userId", (q) => q.eq("userId", viewer.user._id))
        .collect(),
      ctx.db
        .query("certificates")
        .withIndex("userId", (q) => q.eq("userId", viewer.user._id))
        .collect(),
      ctx.db.query("activityLogs").withIndex("createdAt").collect(),
    ]);

    const activeEnrollments = enrollments.filter(
      (e) => e.status === "active" || e.status === "completed",
    );

    const completedEnrollments = enrollments.filter(
      (e) => e.status === "completed",
    );

    let totalHoursLearned = 0;
    let overallProgressSum = 0;

    const enrolledCoursesData = await Promise.all(
      activeEnrollments.map(async (enrollment) => {
        const course = await ctx.db.get(enrollment.courseId);
        if (!course) return null;

        const instructor = course.instructorIds[0]
          ? await ctx.db.get(course.instructorIds[0])
          : null;

        const hoursMatch = course.duration.match(/(\d+)/);
        if (hoursMatch) {
          totalHoursLearned +=
            (parseInt(hoursMatch[1], 10) * enrollment.progressPercentage) / 100;
        }

        overallProgressSum += enrollment.progressPercentage;

        return {
          id: course._id,
          title: course.title,
          slug: course.slug,
          instructor: instructor?.name ?? "Team Knull",
          thumbnail: course.thumbnail,
          progress: enrollment.progressPercentage,
        };
      }),
    );

    const validEnrolledCourses = enrolledCoursesData.filter(
      (c) => c !== null,
    ) as NonNullable<(typeof enrolledCoursesData)[0]>[];

    const overallProgress =
      activeEnrollments.length > 0
        ? Math.round(overallProgressSum / activeEnrollments.length)
        : 0;

    const certificatesData = await Promise.all(
      certificates.map(async (cert) => {
        const course = await ctx.db.get(cert.courseId);
        return {
          id: cert._id,
          title: course?.title ?? "Course Certificate",
          date: new Date(cert.issuedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          link: cert.certificateUrl ?? `/certificates/${cert._id}`,
        };
      }),
    );

    const recentActivity =
      logs.length > 0
        ? logs
            .sort((a, b) => b.createdAt - a.createdAt)
            .slice(0, 3)
            .map((item) => ({
              id: item._id,
              type: item.type,
              message: item.message,
              time: formatDistanceToNowStrict(item.createdAt, {
                addSuffix: true,
              }),
            }))
        : [
            {
              id: "act-1",
              type: "enrollment" as const,
              message: "Enrolled in React Development Masterclass",
              time: "2 days ago",
            },
            {
              id: "act-2",
              type: "course" as const,
              message: "Completed lesson 'Hooks Introduction'",
              time: "1 day ago",
            },
          ];

    return {
      user: {
        name: viewer.user.name,
        email: viewer.user.email,
        avatar: viewer.user.image ?? "",
        location: profile?.location ?? "Unknown",
        joinedDate: "May 2024",
        overallProgress,
      },
      stats: {
        enrolledCourses: activeEnrollments.length,
        completedCourses: completedEnrollments.length,
        certificatesEarned: certificates.length,
        totalHoursLearned: Math.round(totalHoursLearned),
      },
      enrolledCourses: validEnrolledCourses,
      certificates: certificatesData,
      recentActivity,
    };
  },
});

export const getUserProfile = query({
  args: {},
  handler: async (ctx) => {
    const viewer = await getViewerOrThrow(ctx);

    const profile = await ctx.db
      .query("userProfiles")
      .withIndex("userId", (q) => q.eq("userId", viewer.user._id))
      .unique();

    const isProfileComplete = Boolean(
      profile?.location && profile?.bio && profile?.phoneNumber,
    );

    return {
      user: {
        id: viewer.user._id,
        name: viewer.user.name,
        email: viewer.user.email,
        image: viewer.user.image,
        memberSince: new Date(viewer.user.createdAt).toLocaleDateString(
          "en-US",
          { month: "long", year: "numeric" },
        ),
      },
      profile: {
        location: profile?.location ?? "",
        bio: profile?.bio ?? "",
        dateOfBirth: profile?.dateOfBirth ?? "",
        phoneNumber: profile?.phoneNumber ?? "",
        socials: profile?.socials ?? { google: "", github: "", linkedin: "" },
      },
      isProfileComplete,
    };
  },
});

export const updateUserProfile = mutation({
  args: {
    name: v.optional(v.string()),
    location: v.optional(v.string()),
    bio: v.optional(v.string()),
    dateOfBirth: v.optional(v.string()),
    phoneNumber: v.optional(v.string()),
    socials: v.optional(
      v.object({
        google: v.optional(v.string()),
        github: v.optional(v.string()),
        linkedin: v.optional(v.string()),
      }),
    ),
  },
  handler: async (ctx, args) => {
    const viewer = await getViewerOrThrow(ctx);

    if (args.name && args.name !== viewer.user.name) {
      await ctx.db.patch(viewer.user._id, { name: args.name });
    }

    const profile = await ctx.db
      .query("userProfiles")
      .withIndex("userId", (q) => q.eq("userId", viewer.user._id))
      .unique();

    const profileUpdates = {
      location: args.location !== undefined ? args.location : profile?.location,
      bio: args.bio !== undefined ? args.bio : profile?.bio,
      dateOfBirth:
        args.dateOfBirth !== undefined
          ? args.dateOfBirth
          : profile?.dateOfBirth,
      phoneNumber:
        args.phoneNumber !== undefined
          ? args.phoneNumber
          : profile?.phoneNumber,
      socials: args.socials !== undefined ? args.socials : profile?.socials,
    };

    if (profile) {
      await ctx.db.patch(profile._id, profileUpdates);
    } else {
      await ctx.db.insert("userProfiles", {
        userId: viewer.user._id,
        role: "student",
        ...profileUpdates,
      });
    }

    return { success: true };
  },
});
