import { NextResponse } from "next/server";
import { STUDENT_COOKIE } from "@/lib/auth/student-session";

/** POST /api/student/logout — xóa cookie session học viên. */
export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(STUDENT_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return res;
}
