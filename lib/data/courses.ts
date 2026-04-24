import { FileText, Grid, Clock, Trophy } from "lucide-react";

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
  isActive?: boolean;
}

export interface Module {
  id: string;
  title: string;
  lessonsCompleted: number;
  totalLessons: number;
  lessons: Lesson[];
}

export interface Resource {
  title: string;
  type: string;
  icon: "file" | "folder";
}

export interface CourseData {
  id: string;
  title: string;
  description: string;
  rating: number;
  reviewsCount: number;
  studentsCount: string;
  level: string;
  duration: string;
  thumbnail: string;
  badge?: string;
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
  "web-dev-bootcamp": {
    id: "web-dev-bootcamp",
    title: "Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, and modern web development by building real-world projects.",
    rating: 4.7,
    reviewsCount: 892,
    studentsCount: "12,430",
    level: "Beginner to Advanced",
    duration: "25 Hours",
    thumbnail: "https://app.paper.design/file-assets/01KPZPYK5DC63WHG4PEM01K24R/01KPZQXET8N4BBMV3ST7JMF0X5.png",
    badge: "Bestseller",
    progress: {
      percentage: 65,
      lessonsCompleted: 18,
      totalLessons: 28,
      projectsCompleted: 3,
      totalProjects: 5,
      quizScore: 82,
      certificateAvailable: true,
    },
    modules: [
      {
        id: "m1",
        title: "Module 1 · Getting Started",
        lessonsCompleted: 5,
        totalLessons: 5,
        lessons: [
          { id: "l1", title: "1. Introduction to Web Development", duration: "04:32", isCompleted: true },
          { id: "l2", title: "2. How the Web Works", duration: "06:18", isCompleted: true },
          { id: "l3", title: "3. Setting Up Your Environment", duration: "05:45", isCompleted: true },
          { id: "l4", title: "4. HTML Basics", duration: "08:23", isCompleted: true },
          { id: "l5", title: "5. HTML Elements and Structure", duration: "10:15", isCompleted: true, isActive: true },
        ],
      },
      {
        id: "m2",
        title: "Module 2 · CSS Fundamentals",
        lessonsCompleted: 0,
        totalLessons: 6,
        lessons: [],
      },
      {
        id: "m3",
        title: "Module 3 · JavaScript Basics",
        lessonsCompleted: 0,
        totalLessons: 7,
        lessons: [],
      },
    ],
    resources: [
      { title: "Cheatsheet", type: "PDF", icon: "file" },
      { title: "Starter Files", type: "ZIP", icon: "folder" },
      { title: "Notes", type: "PDF", icon: "file" },
    ],
  },
};
