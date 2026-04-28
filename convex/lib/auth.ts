import { ConvexError } from "convex/values";
import type { MutationCtx, QueryCtx } from "../_generated/server";
import { authComponent } from "../betterAuth/auth";

type AuthCtx = QueryCtx | MutationCtx;

export async function getViewerOrThrow(ctx: AuthCtx) {
  const user = await authComponent.getAuthUser(ctx);
  const profile = await ctx.db
    .query("userProfiles")
    .withIndex("userId", (query) => query.eq("userId", user._id))
    .unique();

  return {
    user,
    profile,
    role: profile?.role ?? "student",
  } as const;
}

export async function requireAdmin(ctx: AuthCtx) {
  const viewer = await getViewerOrThrow(ctx);

  if (viewer.role !== "admin") {
    throw new ConvexError("Forbidden");
  }

  return viewer;
}
