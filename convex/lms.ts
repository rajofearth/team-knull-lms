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

        return {
          id: String(instructor._id),
          name: instructor.name,
          role: instructor.role,
          avatar: instructor.avatar,
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
            id: course.slug,
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
      const country = student.country?.trim() || "Others";
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
