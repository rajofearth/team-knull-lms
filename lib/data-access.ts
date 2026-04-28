import { notFound, redirect } from "next/navigation";
import { api } from "@/convex/_generated/api";
import { fetchAuthQuery, isAuthenticated } from "@/lib/auth-server";
import type {
  AdminCourseListItem,
  AdminDashboardData,
  CourseDetailsData,
  CourseListItem,
  ViewerSessionData,
} from "@/lib/lms/types";

export async function getViewerSession(): Promise<ViewerSessionData> {
  return fetchAuthQuery(api.lms.getViewerSession, {});
}

export async function getCatalogCourses(): Promise<CourseListItem[]> {
  return fetchAuthQuery(api.lms.listCatalogCourses, {});
}

export async function getCourseDetailsOrThrow(
  slug: string,
): Promise<CourseDetailsData> {
  const course = await fetchAuthQuery(api.lms.getCourseDetails, { slug });

  if (!course) {
    notFound();
  }

  return course;
}

export async function getAdminCourses(): Promise<AdminCourseListItem[]> {
  return fetchAuthQuery(api.lms.listAdminCourses, {});
}

export async function getAdminDashboard(): Promise<AdminDashboardData> {
  return fetchAuthQuery(api.lms.getAdminDashboard, {});
}

export async function requireAdminAccess(callbackUrl: string) {
  const authenticated = await isAuthenticated();

  if (!authenticated) {
    redirect(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
  }

  const viewer = await getViewerSession();

  if (viewer.role !== "admin") {
    redirect(`/courses?from=${encodeURIComponent(callbackUrl)}`);
  }

  return viewer;
}
