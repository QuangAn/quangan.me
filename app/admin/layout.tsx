"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Users,
  ShoppingCart,
  Settings,
  LogOut,
  Menu,
  X,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { clearAdminToken, getAdminToken } from "@/lib/admin-auth";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Trang đăng nhập KHÔNG thuộc khu vực cần xác thực — nếu không, auth gate bên
  // dưới sẽ trả null và trang đăng nhập bị ẩn (màn hình trắng).
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginPage) {
      setIsLoading(false);
      return;
    }
    const token = getAdminToken();
    if (!token) {
      router.push("/admin/login");
    } else {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [router, isLoginPage]);

  const handleLogout = () => {
    clearAdminToken();
    setIsAuthenticated(false);
    router.push("/admin/login");
  };

  // Render trang đăng nhập đứng riêng (không sidebar, không auth gate).
  if (isLoginPage) {
    return <>{children}</>;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-900">
        <div className="text-slate-400">Đang tải...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const navItems = [
    { href: "/admin", icon: BarChart3, label: "Dashboard" },
    { href: "/admin/leads", icon: Users, label: "Đăng ký" },
    { href: "/admin/orders", icon: ShoppingCart, label: "Đơn hàng" },
    { href: "/admin/accounts", icon: GraduationCap, label: "Tài khoản HV" },
    { href: "/admin/course", icon: BookOpen, label: "Tài liệu" },
    { href: "/admin/settings", icon: Settings, label: "Cài đặt" },
  ];

  return (
    <div className="flex h-screen bg-slate-900 text-slate-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-slate-800 border-r border-slate-700 transform transition-transform duration-200 lg:static lg:translate-x-0 z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Admin
          </h1>
        </div>

        <nav className="space-y-2 px-4">
          {navItems.map(({ href, icon: Icon, label }) => (
            <Link key={href} href={href}>
              <Button
                variant={pathname === href ? "default" : "ghost"}
                className={`w-full justify-start gap-3 ${
                  pathname === href
                    ? "bg-indigo-600 hover:bg-indigo-700"
                    : "hover:bg-slate-700"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon className="w-5 h-5" />
                {label}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-6 left-4 right-4">
          <Button
            variant="outline"
            className="w-full justify-start gap-3 border-slate-700 hover:bg-slate-700"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5" />
            Đăng xuất
          </Button>
        </div>
      </aside>

      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-40">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6 lg:p-8">
          {/* Mobile spacing */}
          <div className="lg:hidden h-12" />
          {children}
        </div>
      </main>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
