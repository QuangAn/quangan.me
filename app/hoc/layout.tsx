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
      <header className="sticky top-0 z-40 border-b border-white/10 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
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

      <main className="mx-auto w-full max-w-[1400px] px-4 pb-20 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        {children}
      </main>
    </div>
  );
}
