// ─── Stat Cards ───────────────────────────────────────────────────────────────
export interface StatCard {
  id: string;
  label: string;
  value: string;
  badge: string;      // e.g. "+12.5%"
  secondary: string;  // e.g. "18.0%"
  trend: "up" | "down";
  comparison: string; // e.g. "vs Apr 1 - Apr 30"
  icon: "users" | "book" | "user" | "monitor" | "dollar";
}

export const statCards: StatCard[] = [
  {
    id: "total-students",
    label: "Total Students",
    value: "12,430",
    badge: "+12.5%",
    secondary: "18.0%",
    trend: "up",
    comparison: "vs Apr 1 - Apr 30",
    icon: "users",
  },
  {
    id: "total-courses",
    label: "Total Courses",
    value: "258",
    badge: "+8.1%",
    secondary: "18.0%",
    trend: "up",
    comparison: "vs Apr 1 - Apr 30",
    icon: "book",
  },
  {
    id: "total-instructors",
    label: "Total Instructors",
    value: "42",
    badge: "+5.0%",
    secondary: "18.0%",
    trend: "up",
    comparison: "vs Apr 1 - Apr 30",
    icon: "user",
  },
  {
    id: "enrollments",
    label: "Enrollments",
    value: "18,532",
    badge: "+15.3%",
    secondary: "18.0%",
    trend: "up",
    comparison: "vs Apr 1 - Apr 30",
    icon: "monitor",
  },
  {
    id: "revenue",
    label: "Revenue",
    value: "$48,320",
    badge: "+18.7%",
    secondary: "18.7%",
    trend: "up",
    comparison: "vs Apr 1 - Apr 30",
    icon: "dollar",
  },
];

// ─── Enrollment Chart ──────────────────────────────────────────────────────────
export interface EnrollmentDataPoint {
  date: string;
  value: number;
}

export const enrollmentOverview: EnrollmentDataPoint[] = [
  { date: "May 1",  value: 1200 },
  { date: "May 3",  value: 1450 },
  { date: "May 5",  value: 1800 },
  { date: "May 8",  value: 2600 },
  { date: "May 10", value: 3100 },
  { date: "May 12", value: 3700 },
  { date: "May 15", value: 4300 },
  { date: "May 17", value: 4800 },
  { date: "May 19", value: 5500 },
  { date: "May 22", value: 5900 },
  { date: "May 24", value: 6400 },
  { date: "May 26", value: 7100 },
  { date: "May 29", value: 7600 },
  { date: "May 31", value: 8200 },
];

// ─── Top Courses ───────────────────────────────────────────────────────────────
export interface TopCourse {
  id: string;
  title: string;
  enrollments: string;
  rating: number;
  thumbnail: string;
}

export const topCourses: TopCourse[] = [
  {
    id: "web-dev",
    title: "Web Development Bootcamp",
    enrollments: "4,892 Enrollments",
    rating: 4.7,
    thumbnail: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/57D02ZX8T4T6X7YR0XTTDXRA9J.jpg",
  },
  {
    id: "uiux-design",
    title: "UI/UX Design Fundamentals",
    enrollments: "3,124 Enrollments",
    rating: 4.8,
    thumbnail: "/course_uiux.png",
  },
  {
    id: "js-advanced",
    title: "JavaScript Advanced Concepts",
    enrollments: "2,345 Enrollments",
    rating: 4.7,
    thumbnail: "",
  },
  {
    id: "react-masterclass",
    title: "React Development Masterclass",
    enrollments: "2,102 Enrollments",
    rating: 4.9,
    thumbnail: "",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Strategy",
    enrollments: "1,876 Enrollments",
    rating: 4.6,
    thumbnail: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/711RZMR1A20C05JSNQGKYSNPWR.jpg",
  },
];

// ─── Students by Country ───────────────────────────────────────────────────────
export interface CountrySegment {
  country: string;
  percentage: number;
  color: string;
}

export const studentsByCountry: CountrySegment[] = [
  { country: "United States", percentage: 32.5, color: "#111827" },
  { country: "India",         percentage: 28.4, color: "#374151" },
  { country: "United Kingdom", percentage: 8.7, color: "#6B7280" },
  { country: "Canada",        percentage: 6.7,  color: "#9CA3AF" },
  { country: "Australia",     percentage: 5.3,  color: "#D1D5DB" },
  { country: "Others",        percentage: 18.4, color: "#E5E7EB" },
];

export const totalStudents = "12,430";

// ─── New Instructors ───────────────────────────────────────────────────────────
export interface NewInstructor {
  id: string;
  name: string;
  courses: number;
  joinedDate: string;
  avatar: string;
}

export const newInstructors: NewInstructor[] = [
  {
    id: "inst-1",
    name: "Sarah Johnson",
    courses: 12,
    joinedDate: "May 28, 2024",
    avatar: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/93P39XQ7T5T6X7YR0XTTDXRA9J.jpg",
  },
  {
    id: "inst-2",
    name: "David Chen",
    courses: 8,
    joinedDate: "May 27, 2024",
    avatar: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/82C39XQ7T5T6X7YR0XTTDXRA9J.jpg",
  },
  {
    id: "inst-3",
    name: "Emma Wilson",
    courses: 15,
    joinedDate: "May 25, 2024",
    avatar: "",
  },
  {
    id: "inst-4",
    name: "Michael Brown",
    courses: 7,
    joinedDate: "May 24, 2024",
    avatar: "",
  },
  {
    id: "inst-5",
    name: "Jessica Lee",
    courses: 10,
    joinedDate: "May 22, 2024",
    avatar: "",
  },
];

// ─── Recent Activity ───────────────────────────────────────────────────────────
export type ActivityType = "course" | "enrollment" | "certificate" | "instructor" | "update";

export interface ActivityItem {
  id: string;
  type: ActivityType;
  message: string;
  time: string;
}

export const recentActivity: ActivityItem[] = [
  {
    id: "act-1",
    type: "course",
    message: 'New course "Advanced TypeScript" was created',
    time: "2 minutes ago",
  },
  {
    id: "act-2",
    type: "enrollment",
    message: 'John Doe enrolled in "Web Development Bootcamp"',
    time: "10 minutes ago",
  },
  {
    id: "act-3",
    type: "certificate",
    message: "Certificate issued to Jane Smith",
    time: "1 hour ago",
  },
  {
    id: "act-4",
    type: "instructor",
    message: 'New instructor "Alex Thompson" joined',
    time: "2 hours ago",
  },
  {
    id: "act-5",
    type: "update",
    message: 'Course "UI/UX Design Fundamentals" updated',
    time: "3 hours ago",
  },
];

// ─── Sidebar Navigation ────────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const adminNavSections: NavSection[] = [
  {
    title: "Management",
    items: [
      { label: "Courses",      href: "/admin/courses",      icon: "book" },
      { label: "Instructors",  href: "/admin/instructors",  icon: "users" },
      { label: "Students",     href: "/admin/students",     icon: "user" },
      { label: "Enrollments",  href: "/admin/enrollments",  icon: "monitor" },
      { label: "Categories",   href: "/admin/categories",   icon: "folder" },
      { label: "Certificates", href: "/admin/certificates", icon: "award" },
    ],
  },
  {
    title: "Analytics",
    items: [
      { label: "Overview",    href: "/admin/analytics",            icon: "bar-chart" },
      { label: "Revenue",     href: "/admin/analytics/revenue",    icon: "dollar-sign" },
      { label: "Engagement",  href: "/admin/analytics/engagement", icon: "message-square" },
      { label: "Reports",     href: "/admin/analytics/reports",    icon: "file-text" },
    ],
  },
  {
    title: "System",
    items: [
      { label: "Users",             href: "/admin/users",        icon: "users" },
      { label: "Roles & Permissions", href: "/admin/roles",      icon: "shield" },
      { label: "Settings",          href: "/admin/settings",     icon: "settings" },
      { label: "Activity Logs",     href: "/admin/logs",         icon: "clock" },
    ],
  },
];

// ─── Courses Table Data ────────────────────────────────────────────────────────
export type CourseStatus = "Published" | "Draft" | "Archived";
export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface AdminCourse {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  instructor: {
    name: string;
    avatar: string;
  };
  category: string;
  level: CourseLevel;
  students: number;
  rating: number;
  status: CourseStatus;
  createdAt: string;
}

export const adminCoursesData: AdminCourse[] = [
  {
    id: "c1",
    title: "Web Development Bootcamp",
    subtitle: "HTML, CSS, JavaScript and more",
    thumbnail: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/57D02ZX8T4T6X7YR0XTTDXRA9J.jpg",
    instructor: {
      name: "John Smith",
      avatar: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/93P39XQ7T5T6X7YR0XTTDXRA9J.jpg",
    },
    category: "Development",
    level: "Beginner",
    students: 4892,
    rating: 4.7,
    status: "Published",
    createdAt: "May 28, 2024",
  },
  {
    id: "c2",
    title: "UI/UX Design Fundamentals",
    subtitle: "Design beautiful user interfaces",
    thumbnail: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/711RZMR1A20C05JSNQGKYSNPWR.jpg",
    instructor: {
      name: "Sarah Johnson",
      avatar: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/82C39XQ7T5T6X7YR0XTTDXRA9J.jpg",
    },
    category: "Design",
    level: "Beginner",
    students: 3124,
    rating: 4.8,
    status: "Published",
    createdAt: "May 20, 2024",
  },
  {
    id: "c3",
    title: "JavaScript Advanced Concepts",
    subtitle: "Deep dive into JS concepts",
    thumbnail: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/57D02ZX8T4T6X7YR0XTTDXRA9J.jpg",
    instructor: {
      name: "David Chen",
      avatar: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/93P39XQ7T5T6X7YR0XTTDXRA9J.jpg",
    },
    category: "Development",
    level: "Advanced",
    students: 2345,
    rating: 4.7,
    status: "Published",
    createdAt: "May 15, 2024",
  },
  {
    id: "c4",
    title: "React Development Masterclass",
    subtitle: "Build modern apps with React",
    thumbnail: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/711RZMR1A20C05JSNQGKYSNPWR.jpg",
    instructor: {
      name: "Emma Wilson",
      avatar: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/82C39XQ7T5T6X7YR0XTTDXRA9J.jpg",
    },
    category: "Development",
    level: "Intermediate",
    students: 2102,
    rating: 4.9,
    status: "Published",
    createdAt: "May 10, 2024",
  },
  {
    id: "c5",
    title: "Digital Marketing Strategy",
    subtitle: "Grow your business online",
    thumbnail: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/57D02ZX8T4T6X7YR0XTTDXRA9J.jpg",
    instructor: {
      name: "Michael Brown",
      avatar: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/93P39XQ7T5T6X7YR0XTTDXRA9J.jpg",
    },
    category: "Marketing",
    level: "Beginner",
    students: 1876,
    rating: 4.6,
    status: "Published",
    createdAt: "May 5, 2024",
  },
  {
    id: "c6",
    title: "Graphics Design Masterclass",
    subtitle: "Design stunning visuals",
    thumbnail: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/711RZMR1A20C05JSNQGKYSNPWR.jpg",
    instructor: {
      name: "Jessica Lee",
      avatar: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/82C39XQ7T5T6X7YR0XTTDXRA9J.jpg",
    },
    category: "Design",
    level: "Intermediate",
    students: 1543,
    rating: 4.9,
    status: "Draft",
    createdAt: "May 2, 2024",
  },
  {
    id: "c7",
    title: "Photography Fundamentals",
    subtitle: "Capture stunning photos",
    thumbnail: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/57D02ZX8T4T6X7YR0XTTDXRA9J.jpg",
    instructor: {
      name: "Alex Thompson",
      avatar: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/93P39XQ7T5T6X7YR0XTTDXRA9J.jpg",
    },
    category: "Photography",
    level: "Beginner",
    students: 1234,
    rating: 4.8,
    status: "Draft",
    createdAt: "Apr 28, 2024",
  },
  {
    id: "c8",
    title: "Business Strategy Essentials",
    subtitle: "Strategic thinking for growth",
    thumbnail: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/711RZMR1A20C05JSNQGKYSNPWR.jpg",
    instructor: {
      name: "Sophia Martinez",
      avatar: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/82C39XQ7T5T6X7YR0XTTDXRA9J.jpg",
    },
    category: "Business",
    level: "Intermediate",
    students: 987,
    rating: 4.6,
    status: "Archived",
    createdAt: "Apr 20, 2024",
  },
];
