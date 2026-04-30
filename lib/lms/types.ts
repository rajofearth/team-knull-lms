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
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
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
  isEnrolled: boolean;
  isLoggedIn: boolean;
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
  icon:
    | "users"
    | "book"
    | "user"
    | "monitor"
    | "dollar"
    | "database"
    | "mail"
    | "star";
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

export interface AdminInstructorListItem {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  email: string;
  courses: number;
  enrollments: number;
  rating: number;
  status: "Active" | "Inactive";
  joinedDate: string;
}

export interface AdminInstructorsPageData {
  statCards: DashboardStatCardData[];
  instructors: AdminInstructorListItem[];
}

export interface AdminInstructorDetails {
  id: string;
  name: string;
  slug: string;
  email: string;
  role: string;
  avatar: string;
  bio: string;
  status: "Active" | "Inactive";
  website?: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  stats: {
    yearsExperience?: string;
    students: string;
    courses: number;
    rating: number;
  };
  assignedCourses: Array<{
    id: string;
    title: string;
  }>;
}

export interface CourseCatalogData {
  courses: CourseListItem[];
}

export interface EnrolledCourseData {
  id: string;
  title: string;
  slug: string;
  instructor: string;
  thumbnail: string;
  progress: number;
}

export interface StudentCertificateData {
  id: string;
  title: string;
  date: string;
  link: string;
}

export interface StudentDashboardData {
  user: {
    name: string;
    email: string;
    avatar: string;
    location: string;
    joinedDate: string;
    overallProgress: number;
  };
  stats: {
    enrolledCourses: number;
    completedCourses: number;
    certificatesEarned: number;
    totalHoursLearned: number;
  };
  enrolledCourses: EnrolledCourseData[];
  certificates: StudentCertificateData[];
  recentActivity: ActivityItemData[];
}

export interface UserProfileData {
  user: {
    id: string;
    name: string;
    email: string;
    image?: string | null;
    memberSince: string;
  };
  profile: {
    location: string;
    bio: string;
    dateOfBirth: string;
    phoneNumber: string;
    socials: {
      google?: string;
      github?: string;
      linkedin?: string;
    };
  };
  isProfileComplete: boolean;
}
