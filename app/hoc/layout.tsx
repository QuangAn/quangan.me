import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getStudentFromCookie } from "@/lib/student-server";
import { siteConfig } from "@/config/site";
import { StudentLogoutButton } from "@/components/student/logout-button";

export const metadata: Metadata = {
  title: "Khu vực học",
  robots: { index: false, follow: false },
};

export default async function HocLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getStudentFromCookie();

  return (
    <div className="min-h-dvh">
      <header className="border-b border-white/10">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {siteConfig.shortName}
          </Link>
          {user && (
            <div className="flex items-center gap-3">
              <span className="hidden text-sm text-muted-foreground sm:inline">
                {user.email}
              </span>
              <StudentLogoutButton />
            </div>
          )}
        </div>
      </header>

      <main className="container max-w-5xl pb-20 pt-8 sm:pt-10">{children}</main>
    </div>
  );
}
