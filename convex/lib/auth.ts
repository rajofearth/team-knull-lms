import { ConvexError } from "convex/values";
import type { MutationCtx, QueryCtx } from "../_generated/server";
import { authComponent } from "../betterAuth/auth";

type AuthCtx = QueryCtx | MutationCtx;

export async function getViewer(ctx: AuthCtx) {
  try {
    const user = await authComponent.getAuthUser(ctx);
    if (!user) return null;

    const profile = await ctx.db
      .query("userProfiles")
      .withIndex("userId", (query) => query.eq("userId", user._id))
      .unique();

    return {
      user,
      profile,
      role: profile?.role ?? "student",
    } as const;
  } catch (_error) {
    return null;
  }
}

export async function getViewerOrThrow(ctx: AuthCtx) {
  const viewer = await getViewer(ctx);
  if (!viewer) {
    throw new ConvexError("Unauthorized");
  }
  return viewer;
}

export async function requireAdmin(ctx: AuthCtx) {
  const viewer = await getViewerOrThrow(ctx);

  if (viewer.role !== "admin") {
    throw new ConvexError("Forbidden");
  }

  return viewer;
}
