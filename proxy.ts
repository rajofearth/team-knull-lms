import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getToken } from "@/lib/auth-server";

export async function proxy(request: NextRequest) {
  const token = await getToken();

  if (token) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  const callbackUrl = `${request.nextUrl.pathname}${request.nextUrl.search}`;

  loginUrl.searchParams.set("callbackUrl", callbackUrl);

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/admin/:path*", "/courses/:path*"],
};
