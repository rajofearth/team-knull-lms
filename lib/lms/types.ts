export type AppRole = "admin" | "student";

export type CourseStatus = "draft" | "published" | "archived" | "scheduled";
export type CourseLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "Beginner to Advanced";
export type CourseVisibility = "public" | "unlisted" | "private";
export type PricingModel = "free" | "one-time" | "subscription" | "multiple";

export type LessonResourceIcon = "file" | "folder";

export interface InstructorSummary {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  stats: {
    yearsExperience?: string;
    students: string;
    courses: number;
    rating: number;
  };
}

export interface InstructorCourseSummary {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  rating: number;
  studentsCount?: string;
}

export interface CourseFeature {
  title: string;
  description: string;
  icon: string;
}

export interface CourseAudienceItem {
  title: string;
  description: string;
  icon: string;
}

export interface CourseOverviewData {
  whatYouWillLearn: string[];
  requirements: string[];
  detailedDescription: string;
  features?: CourseFeature[];
  whoThisCourseIsFor?: CourseAudienceItem[];
  syllabus: string[];
  applications: string[];
}

export interface CourseResourceData {
  id: string;
  title: string;
  type: string;
  icon: LessonResourceIcon;
  url: string;
  lessonId?: string;
}

export interface CourseLessonData {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
  isActive?: boolean;
  videoUrl?: string;
  description?: string;
  isPreview?: boolean;
}

export interface CourseModuleData {
  id: string;
  title: string;
  description: string;
  lessonsCompleted: number;
  totalLessons: number;
  lessons: CourseLessonData[];
}

export interface CourseProgressData {
  percentage: number;
  lessonsCompleted: number;
  totalLessons: number;
  projectsCompleted: number;
  totalProjects: number;
  quizScore: number;
  certificateAvailable: boolean;
}

export interface CourseListItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  rating: number;
  reviewsCount: number;
  studentsCount: string;
  level: CourseLevel;
  duration: string;
  thumbnail: string;
  badge?: string;
  price: number;
}

export interface CourseDetailsData extends CourseListItem {
  progress: CourseProgressData;
  resources: CourseResourceData[];
  modules: CourseModuleData[];
  overview: CourseOverviewData;
  instructors: Array<
    InstructorSummary & {
      coursesOnPlatform: InstructorCourseSummary[];
    }
  >;
}

export interface ViewerSessionData {
  isAuthenticated: boolean;
  role: AppRole;
  user: {
    id: string;
    name: string;
    email: string;
    image?: string | null;
  } | null;
}

export interface DashboardStatCardData {
  id: string;
  label: string;
  value: string;
  badge: string;
  secondary: string;
  trend: "up" | "down";
  comparison: string;
  icon: "users" | "book" | "user" | "monitor" | "dollar";
}

export interface EnrollmentDataPoint {
  date: string;
  value: number;
}

export interface TopCourseData {
  id: string;
  title: string;
  enrollments: string;
  rating: number;
  thumbnail: string;
}

export interface CountrySegmentData {
  country: string;
  percentage: number;
  color: string;
}

export interface NewInstructorData {
  id: string;
  name: string;
  courses: number;
  joinedDate: string;
  avatar: string;
}

export type ActivityType =
  | "course"
  | "enrollment"
  | "certificate"
  | "instructor"
  | "update";

export interface ActivityItemData {
  id: string;
  type: ActivityType;
  message: string;
  time: string;
}

export interface AdminDashboardData {
  statCards: DashboardStatCardData[];
  enrollmentOverview: EnrollmentDataPoint[];
  topCourses: TopCourseData[];
  studentsByCountry: CountrySegmentData[];
  totalStudents: string;
  newInstructors: NewInstructorData[];
  recentActivity: ActivityItemData[];
}

export interface AdminCourseListItem {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  instructor: {
    name: string;
    avatar: string;
  };
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  students: number;
  rating: number;
  status: "Published" | "Draft" | "Archived";
  createdAt: string;
}

export interface CourseCatalogData {
  courses: CourseListItem[];
}
