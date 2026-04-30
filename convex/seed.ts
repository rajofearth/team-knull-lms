import { courses as mockCourses } from "../lib/data/courses";
import type { MutationCtx } from "./_generated/server";
import { mutation } from "./_generated/server";
import { requireAdmin } from "./lib/auth";

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeSeedLevel(
  level: string,
): "Beginner" | "Intermediate" | "Advanced" | "Beginner to Advanced" {
  if (level === "All Levels") {
    return "Beginner to Advanced";
  }

  if (
    level === "Beginner" ||
    level === "Intermediate" ||
    level === "Advanced" ||
    level === "Beginner to Advanced"
  ) {
    return level;
  }

  return "Beginner to Advanced";
}

async function findOrCreateCategory(ctx: MutationCtx, name: string) {
  const slug = toSlug(name);
  const existing = await ctx.db
    .query("categories")
    .withIndex("slug", (q) => q.eq("slug", slug))
    .unique();

  if (existing) {
    return existing._id;
  }

  return await ctx.db.insert("categories", {
    slug,
    name,
    createdAt: Date.now(),
  });
}

async function findOrCreateInstructor(
  ctx: MutationCtx,
  instructor: (typeof mockCourses)[string]["instructors"][number],
) {
  const slug = toSlug(instructor.name);
  const existing = await ctx.db
    .query("instructors")
    .withIndex("slug", (q) => q.eq("slug", slug))
    .unique();

  if (existing) {
    return existing._id;
  }

  return await ctx.db.insert("instructors", {
    slug,
    name: instructor.name,
    email: `${slug}@example.com`,
    role: instructor.role,
    avatar: instructor.avatar,
    bio: instructor.bio,
    status: "Active",
    stats: instructor.stats,
    createdAt: Date.now(),
  });
}

export const seedCatalog = mutation({
  args: {},
  handler: async (ctx) => {
    const existingCourses = await ctx.db.query("courses").take(1);
    if (existingCourses.length > 0) {
      await requireAdmin(ctx);
      return { created: false, reason: "catalog_exists" };
    }

    for (const [courseKey, course] of Object.entries(mockCourses)) {
      const primaryCategory = course.title.includes("Marketing")
        ? "Marketing"
        : course.title.includes("Design")
          ? "Design"
          : "Development";

      const categoryId = await findOrCreateCategory(ctx, primaryCategory);
      const instructorIds = [];

      for (const instructor of course.instructors) {
        instructorIds.push(await findOrCreateInstructor(ctx, instructor));
      }

      const now = Date.now();
      const courseId = await ctx.db.insert("courses", {
        slug: course.id,
        title: course.title,
        subtitle: course.description,
        description: course.description,
        detailedDescription: course.overview.detailedDescription,
        thumbnail: course.thumbnail,
        previewVideoUrl: course.modules[0]?.lessons[0]?.videoUrl,
        categoryId,
        instructorIds,
        level: normalizeSeedLevel(course.level),
        duration: course.duration,
        totalLessons: course.progress.totalLessons,
        totalProjects: course.progress.totalProjects,
        rating: course.rating,
        reviewsCount: Number(course.reviewsCount),
        studentsCount: Number(
          String(course.studentsCount).replace(/[^0-9]/g, "") || "0",
        ),
        badge: course.badge,
        price: course.price,
        compareAtPrice: course.price > 0 ? course.price + 30 : undefined,
        status: "published",
        visibility: "public",
        pricingModel: course.price === 0 ? "free" : "one-time",
        language: "English",
        tags: [],
        whatYouWillLearn: course.overview.whatYouWillLearn,
        requirements: course.overview.requirements,
        features: course.overview.features,
        whoThisCourseIsFor: course.overview.whoThisCourseIsFor,
        syllabus: course.overview.syllabus,
        applications: course.overview.applications,
        metaTitle: course.title,
        metaDescription: course.description,
        certificateEnabled: course.progress.certificateAvailable,
        certificateTemplate: "default",
        passingPercentage: 70,
        lifetimeAccess: true,
        downloadableResources: true,
        discussionEnabled: false,
        requireEnrollmentApproval: false,
        createdAt: now,
        updatedAt: now,
        publishedAt: now,
      });

      for (const [moduleIndex, module] of course.modules.entries()) {
        const moduleId = await ctx.db.insert("courseModules", {
          courseId,
          title: module.title,
          description: module.description,
          order: moduleIndex,
        });

        for (const [lessonIndex, lesson] of module.lessons.entries()) {
          const lessonId = await ctx.db.insert("courseLessons", {
            courseId,
            moduleId,
            title: lesson.title,
            description: lesson.description,
            duration: lesson.duration,
            videoUrl: lesson.videoUrl,
            order: lessonIndex,
            isPreview: Boolean(lessonIndex === 0),
            resourceCount: 0,
          });

          if (moduleIndex === 0 && lessonIndex === 0) {
            for (const [
              resourceIndex,
              resource,
            ] of course.resources.entries()) {
              await ctx.db.insert("courseResources", {
                courseId,
                lessonId,
                title: resource.title,
                type: resource.type,
                icon: resource.icon,
                url: resource.url,
                order: resourceIndex,
              });
            }
          }
        }
      }

      await ctx.db.insert("activityLogs", {
        type: "course",
        message: `Seeded course "${course.title}"`,
        createdAt: now,
      });

      if (courseKey === "web-dev") {
        await ctx.db.insert("activityLogs", {
          type: "update",
          message: `Course "${course.title}" imported with curriculum and resources`,
          createdAt: now,
        });
      }
    }

    return { created: true };
  },
});
