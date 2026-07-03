"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Nút đăng xuất khu vực học — xóa cookie session rồi về trang đăng nhập. */
export function StudentLogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await fetch("/api/student/logout", { method: "POST" });
    } catch {
      // Bỏ qua — vẫn điều hướng về trang đăng nhập
    }
    router.replace("/hoc/dang-nhap");
    router.refresh();
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleLogout}
      disabled={loading}
      className="gap-2"
    >
      <LogOut className="h-4 w-4" aria-hidden />
      Đăng xuất
    </Button>
  );
}
