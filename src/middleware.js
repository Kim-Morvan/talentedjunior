import { NextResponse } from "next/server";

export function middleware(req) {
  const path = req.nextUrl.pathname;

  const protectedPath = path === "/dashboard";

  const token = req.cookies.get("token")?.value || "";

  if (protectedPath && token) {
    NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  } else {
    NextResponse.redirect(new URL("/", req.nextUrl));
  }
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/dashboard"],
};
