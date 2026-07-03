import { redirect } from "next/navigation";
import { getStudentFromCookie } from "@/lib/student-server";
import { ChangePasswordForm } from "@/components/student/change-password-form";

export const dynamic = "force-dynamic";

export default async function ChangePasswordPage() {
  const user = await getStudentFromCookie();
  if (!user) {
    redirect("/hoc/dang-nhap");
  }
  return <ChangePasswordForm />;
}
