import { FileText, Grid, Clock, Trophy } from "lucide-react";

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
  isActive?: boolean;
  videoUrl?: string;
  description?: string;
}

export interface Resource {
  title: string;
  type: string;
  icon: "file" | "folder";
  url: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
  totalLessons: number;
  lessonsCompleted: number;
}

export interface CourseData {
  id: string;
  title: string;
  description: string;
  rating: number;
  reviewsCount: number | string;
  studentsCount: string;
  level: string;
  duration: string;
  thumbnail: string;
  badge?: string;
  price: number;
  progress: {
    percentage: number;
    lessonsCompleted: number;
    totalLessons: number;
    projectsCompleted: number;
    totalProjects: number;
    quizScore: number;
    certificateAvailable: boolean;
  };
  modules: Module[];
  resources: Resource[];
}

export const courses: Record<string, CourseData> = {
  "web-dev": {
    id: "web-dev",
    title: "Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, and modern web development by building real-world projects. From zero to job-ready.",
    rating: 4.7,
    reviewsCount: 892,
    studentsCount: "12,430",
    level: "Beginner to Advanced",
    duration: "25 Hours",
    thumbnail: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/57D02ZX8T4T6X7YR0XTTDXRA9J.jpg",
    badge: "New",
    price: 59,
    progress: {
      percentage: 65,
      lessonsCompleted: 18,
      totalLessons: 28,
      projectsCompleted: 3,
      totalProjects: 5,
      quizScore: 82,
      certificateAvailable: true,
    },
    resources: [
      { title: "HTML Cheatsheet", type: "PDF", icon: "file", url: "#" },
      { title: "CSS Starter Pack", type: "ZIP", icon: "folder", url: "#" },
      { title: "JS Reference Guide", type: "PDF", icon: "file", url: "#" },
    ],
    modules: [
      {
        id: "m1",
        title: "Module 1 · Getting Started",
        lessonsCompleted: 5,
        totalLessons: 5,
        lessons: [
          { id: "l1", title: "1. Introduction to Web Development", duration: "04:32", isCompleted: true, videoUrl: "https://example.com/v1", description: "Learn what web development is and the roles of HTML, CSS, and JS." },
          { id: "l2", title: "2. How the Web Works", duration: "06:18", isCompleted: true, videoUrl: "https://example.com/v2", description: "Understand DNS, servers, and how browsers render pages." },
          { id: "l3", title: "3. Setting Up Your Environment", duration: "05:45", isCompleted: true, videoUrl: "https://example.com/v3", description: "Install VS Code and essential extensions." },
          { id: "l4", title: "4. HTML Basics", duration: "08:23", isCompleted: true, videoUrl: "https://example.com/v4", description: "Learn the core structure of an HTML document." },
          { id: "l5", title: "5. HTML Elements and Structure", duration: "10:15", isCompleted: true, isActive: true, videoUrl: "https://example.com/v5", description: "Deep dive into semantic HTML elements like header, main, and footer." },
        ],
      },
      {
        id: "m2",
        title: "Module 2 · CSS Fundamentals",
        lessonsCompleted: 0,
        totalLessons: 6,
        lessons: [
          { id: "l6", title: "6. Introduction to CSS", duration: "07:45", isCompleted: false },
          { id: "l7", title: "7. CSS Selectors and Properties", duration: "12:20", isCompleted: false },
          { id: "l8", title: "8. The Box Model", duration: "09:15", isCompleted: false },
          { id: "l9", title: "9. Flexbox Layouts", duration: "15:30", isCompleted: false },
          { id: "l10", title: "10. Grid Systems", duration: "14:10", isCompleted: false },
          { id: "l11", title: "11. Responsive Design", duration: "11:50", isCompleted: false },
        ],
      },
      {
        id: "m3",
        title: "Module 3 · JavaScript Basics",
        lessonsCompleted: 0,
        totalLessons: 7,
        lessons: [
          { id: "l12", title: "12. JS Syntax and Variables", duration: "08:10", isCompleted: false },
          { id: "l13", title: "13. Data Types and Operators", duration: "10:30", isCompleted: false },
          { id: "l14", title: "14. Functions and Scope", duration: "13:45", isCompleted: false },
          { id: "l15", title: "15. Conditionals and Loops", duration: "11:20", isCompleted: false },
          { id: "l16", title: "16. Arrays and Objects", duration: "14:50", isCompleted: false },
          { id: "l17", title: "17. DOM Manipulation", duration: "16:15", isCompleted: false },
          { id: "l18", title: "18. Event Listeners", duration: "12:40", isCompleted: false },
        ],
      },
    ],
  },
  "uiux-design": {
    id: "uiux-design",
    title: "UI/UX Design Fundamentals",
    description: "Learn the basics of UI/UX design and create beautiful user interfaces with Figma and design principles.",
    rating: 4.8,
    reviewsCount: "1.2k",
    studentsCount: "8,540",
    level: "Beginner",
    duration: "12 Hours",
    thumbnail: "/course_uiux.png",
    badge: "Bestseller",
    price: 49,
    progress: {
      percentage: 0,
      lessonsCompleted: 0,
      totalLessons: 15,
      projectsCompleted: 0,
      totalProjects: 3,
      quizScore: 0,
      certificateAvailable: true,
    },
    resources: [
      { title: "Design Principles PDF", type: "PDF", icon: "file", url: "#" },
      { title: "Figma UI Kit", type: "ZIP", icon: "folder", url: "#" },
    ],
    modules: [
      {
        id: "m1",
        title: "Module 1 · Intro to Design",
        lessonsCompleted: 0,
        totalLessons: 5,
        lessons: [
          { id: "l1", title: "1. What is UI vs UX?", duration: "05:30", isCompleted: false },
          { id: "l2", title: "2. The Design Process", duration: "08:15", isCompleted: false },
          { id: "l3", title: "3. Design Thinking", duration: "10:45", isCompleted: false },
        ],
      },
    ],
  },
  "graphics-design": {
    id: "graphics-design",
    title: "Graphics Design Masterclass",
    description: "Design stunning visuals and brand identities like a pro using Photoshop, Illustrator and more.",
    rating: 4.9,
    reviewsCount: "1.1k",
    studentsCount: "5,210",
    level: "All Levels",
    duration: "18 Hours",
    thumbnail: "/course_graphics.png",
    badge: "Popular",
    price: 49,
    progress: {
      percentage: 0,
      lessonsCompleted: 0,
      totalLessons: 20,
      projectsCompleted: 0,
      totalProjects: 4,
      quizScore: 0,
      certificateAvailable: true,
    },
    resources: [
      { title: "Branding Guide", type: "PDF", icon: "file", url: "#" },
      { title: "Icon Pack", type: "ZIP", icon: "folder", url: "#" },
    ],
    modules: [
      {
        id: "m1",
        title: "Module 1 · Design Basics",
        lessonsCompleted: 0,
        totalLessons: 5,
        lessons: [
          { id: "l1", title: "1. Introduction to Graphics Design", duration: "06:20", isCompleted: false },
        ],
      },
    ],
  },
  "digital-marketing": {
    id: "digital-marketing",
    title: "Digital Marketing Strategy",
    description: "Master digital marketing and grow any business online with SEO, Social Media, and Ads.",
    rating: 4.8,
    reviewsCount: 743,
    studentsCount: "10,120",
    level: "Beginner",
    duration: "10 Hours",
    thumbnail: "https://app.paper.design/file-assets/01KPZWMJ3H4NEREG0PQ8WG2GWM/711RZMR1A20C05JSNQGKYSNPWR.jpg",
    badge: "New",
    price: 39,
    progress: {
      percentage: 0,
      lessonsCompleted: 0,
      totalLessons: 12,
      projectsCompleted: 0,
      totalProjects: 2,
      quizScore: 0,
      certificateAvailable: true,
    },
    resources: [
      { title: "Marketing Plan Template", type: "PDF", icon: "file", url: "#" },
    ],
    modules: [
      {
        id: "m1",
        title: "Module 1 · Foundation",
        lessonsCompleted: 0,
        totalLessons: 4,
        lessons: [
          { id: "l1", title: "1. Digital Marketing Overview", duration: "07:10", isCompleted: false },
        ],
      },
    ],
  },
};

