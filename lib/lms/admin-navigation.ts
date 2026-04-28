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
      { label: "Courses", href: "/admin/courses", icon: "book" },
      { label: "Instructors", href: "/admin/instructors", icon: "users" },
      { label: "Students", href: "/admin/students", icon: "user" },
      { label: "Enrollments", href: "/admin/enrollments", icon: "monitor" },
      { label: "Categories", href: "/admin/categories", icon: "folder" },
      { label: "Certificates", href: "/admin/certificates", icon: "award" },
    ],
  },
  {
    title: "Analytics",
    items: [
      { label: "Overview", href: "/admin/analytics", icon: "bar-chart" },
      {
        label: "Revenue",
        href: "/admin/analytics/revenue",
        icon: "dollar-sign",
      },
      {
        label: "Engagement",
        href: "/admin/analytics/engagement",
        icon: "message-square",
      },
      { label: "Reports", href: "/admin/analytics/reports", icon: "file-text" },
    ],
  },
  {
    title: "System",
    items: [
      { label: "Users", href: "/admin/users", icon: "users" },
      { label: "Roles & Permissions", href: "/admin/roles", icon: "shield" },
      { label: "Settings", href: "/admin/settings", icon: "settings" },
      { label: "Activity Logs", href: "/admin/logs", icon: "clock" },
    ],
  },
];
