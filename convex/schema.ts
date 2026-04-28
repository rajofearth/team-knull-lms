import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { tables as authTables } from "./betterAuth/schema";

const richTextFeature = v.object({
  title: v.string(),
  description: v.string(),
  icon: v.string(),
});

const instructorStats = v.object({
  yearsExperience: v.optional(v.string()),
  students: v.string(),
  courses: v.number(),
  rating: v.number(),
});

export default defineSchema({
  ...authTables,
  userProfiles: defineTable({
    userId: v.string(),
    role: v.union(v.literal("admin"), v.literal("student")),
    country: v.optional(v.string()),
  }).index("userId", ["userId"]),
  instructors: defineTable({
    slug: v.string(),
    name: v.string(),
    role: v.string(),
    avatar: v.string(),
    bio: v.string(),
    stats: instructorStats,
    createdAt: v.number(),
  })
    .index("slug", ["slug"])
    .index("createdAt", ["createdAt"]),
  categories: defineTable({
    slug: v.string(),
    name: v.string(),
    createdAt: v.number(),
  }).index("slug", ["slug"]),
  courses: defineTable({
    slug: v.string(),
    title: v.string(),
    subtitle: v.string(),
    description: v.string(),
    detailedDescription: v.string(),
    thumbnail: v.string(),
    previewVideoUrl: v.optional(v.string()),
    categoryId: v.id("categories"),
    instructorIds: v.array(v.id("instructors")),
    level: v.union(
      v.literal("Beginner"),
      v.literal("Intermediate"),
      v.literal("Advanced"),
      v.literal("Beginner to Advanced"),
    ),
    duration: v.string(),
    totalLessons: v.number(),
    totalProjects: v.number(),
    rating: v.number(),
    reviewsCount: v.number(),
    studentsCount: v.number(),
    badge: v.optional(v.string()),
    price: v.number(),
    compareAtPrice: v.optional(v.number()),
    status: v.union(
      v.literal("draft"),
      v.literal("published"),
      v.literal("archived"),
      v.literal("scheduled"),
    ),
    visibility: v.union(
      v.literal("public"),
      v.literal("unlisted"),
      v.literal("private"),
    ),
    pricingModel: v.union(
      v.literal("free"),
      v.literal("one-time"),
      v.literal("subscription"),
      v.literal("multiple"),
    ),
    language: v.string(),
    tags: v.array(v.string()),
    whatYouWillLearn: v.array(v.string()),
    requirements: v.array(v.string()),
    features: v.optional(v.array(richTextFeature)),
    whoThisCourseIsFor: v.optional(v.array(richTextFeature)),
    syllabus: v.array(v.string()),
    applications: v.array(v.string()),
    metaTitle: v.optional(v.string()),
    metaDescription: v.optional(v.string()),
    certificateEnabled: v.boolean(),
    certificateTemplate: v.optional(v.string()),
    passingPercentage: v.number(),
    lifetimeAccess: v.boolean(),
    downloadableResources: v.boolean(),
    discussionEnabled: v.boolean(),
    requireEnrollmentApproval: v.boolean(),
    enrollmentStartAt: v.optional(v.number()),
    enrollmentEndAt: v.optional(v.number()),
    publishedAt: v.optional(v.number()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("slug", ["slug"])
    .index("status", ["status"])
    .index("categoryId", ["categoryId"])
    .index("createdAt", ["createdAt"]),
  courseModules: defineTable({
    courseId: v.id("courses"),
    title: v.string(),
    description: v.string(),
    order: v.number(),
  })
    .index("courseId", ["courseId"])
    .index("courseId_order", ["courseId", "order"]),
  courseLessons: defineTable({
    courseId: v.id("courses"),
    moduleId: v.id("courseModules"),
    title: v.string(),
    description: v.optional(v.string()),
    duration: v.string(),
    videoUrl: v.optional(v.string()),
    order: v.number(),
    isPreview: v.boolean(),
    resourceCount: v.number(),
  })
    .index("courseId", ["courseId"])
    .index("moduleId", ["moduleId"])
    .index("moduleId_order", ["moduleId", "order"]),
  courseResources: defineTable({
    courseId: v.id("courses"),
    lessonId: v.optional(v.id("courseLessons")),
    title: v.string(),
    type: v.string(),
    icon: v.union(v.literal("file"), v.literal("folder")),
    url: v.string(),
    order: v.number(),
  })
    .index("courseId", ["courseId"])
    .index("lessonId", ["lessonId"])
    .index("courseId_order", ["courseId", "order"]),
  enrollments: defineTable({
    courseId: v.id("courses"),
    userId: v.string(),
    status: v.union(
      v.literal("active"),
      v.literal("completed"),
      v.literal("pending"),
      v.literal("cancelled"),
    ),
    enrolledAt: v.number(),
    completedAt: v.optional(v.number()),
    approvedAt: v.optional(v.number()),
    progressPercentage: v.number(),
    lessonsCompleted: v.number(),
    projectsCompleted: v.number(),
    quizScore: v.number(),
    lastLessonId: v.optional(v.id("courseLessons")),
  })
    .index("userId", ["userId"])
    .index("courseId", ["courseId"])
    .index("userId_courseId", ["userId", "courseId"])
    .index("status", ["status"]),
  lessonProgress: defineTable({
    enrollmentId: v.id("enrollments"),
    lessonId: v.id("courseLessons"),
    completed: v.boolean(),
    completedAt: v.optional(v.number()),
  })
    .index("enrollmentId", ["enrollmentId"])
    .index("enrollmentId_lessonId", ["enrollmentId", "lessonId"]),
  certificates: defineTable({
    enrollmentId: v.id("enrollments"),
    courseId: v.id("courses"),
    userId: v.string(),
    issuedAt: v.number(),
    certificateUrl: v.optional(v.string()),
  })
    .index("userId", ["userId"])
    .index("courseId", ["courseId"])
    .index("enrollmentId", ["enrollmentId"]),
  activityLogs: defineTable({
    type: v.union(
      v.literal("course"),
      v.literal("enrollment"),
      v.literal("certificate"),
      v.literal("instructor"),
      v.literal("update"),
    ),
    message: v.string(),
    createdAt: v.number(),
  }).index("createdAt", ["createdAt"]),
});
