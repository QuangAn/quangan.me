"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { adminFetch } from "@/lib/admin-auth";
import {
  Users,
  ShoppingCart,
  TrendingUp,
  Clock,
  PhoneIcon,
  MailIcon,
  GraduationCap,
} from "lucide-react";
import type { DashboardStats, CourseLead } from "@/types/admin";

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await adminFetch("/api/admin/stats");

        if (!response.ok) throw new Error("Failed to fetch stats");

        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load dashboard"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="h-8 bg-slate-700 rounded animate-pulse w-48" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-32 bg-slate-700 rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded text-red-400">
        {error}
      </div>
    );
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-slate-400">Giám sát khóa học và doanh số</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-1">Tổng đăng ký</p>
              <p className="text-3xl font-bold text-white">
                {stats?.totalLeads || 0}
              </p>
            </div>
            <Users className="w-8 h-8 text-blue-400 opacity-50" />
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-1">Đơn hàng</p>
              <p className="text-3xl font-bold text-white">
                {stats?.totalOrders || 0}
              </p>
            </div>
            <ShoppingCart className="w-8 h-8 text-green-400 opacity-50" />
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-1">Doanh số thanh toán</p>
              <p className="text-2xl font-bold text-white">
                {formatCurrency(stats?.totalRevenue || 0)}
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-400 opacity-50" />
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-500/30 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-1">Chờ thanh toán</p>
              <p className="text-3xl font-bold text-white">
                {stats?.pendingOrders || 0}
              </p>
            </div>
            <Clock className="w-8 h-8 text-orange-400 opacity-50" />
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-1">Đã thanh toán</p>
              <p className="text-3xl font-bold text-white">
                {stats?.paidOrders || 0}
              </p>
            </div>
            <ShoppingCart className="w-8 h-8 text-cyan-400 opacity-50" />
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 border-indigo-500/30 p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-slate-400 text-sm mb-1">Học viên đã cấp</p>
              <p className="text-3xl font-bold text-white">
                {stats?.totalStudents || 0}
              </p>
            </div>
            <GraduationCap className="w-8 h-8 text-indigo-400 opacity-50" />
          </div>
        </Card>
      </div>

      {/* Recent Leads */}
      <Card className="border-slate-700 bg-slate-800/50 backdrop-blur p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Đăng ký gần đây</h2>
          <Link href="/admin/leads">
            <Button variant="outline" size="sm">
              Xem tất cả
            </Button>
          </Link>
        </div>

        <div className="space-y-3">
          {stats?.recentLeads && stats.recentLeads.length > 0 ? (
            stats.recentLeads.map((lead: CourseLead) => (
              <div
                key={lead.id}
                className="flex items-start gap-4 p-4 bg-slate-900/50 border border-slate-700 rounded hover:border-slate-600 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-medium text-white">{lead.full_name}</p>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <PhoneIcon className="w-4 h-4" />
                      {lead.phone}
                    </span>
                    {lead.email && (
                      <span className="flex items-center gap-1">
                        <MailIcon className="w-4 h-4" />
                        {lead.email}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500">
                    {formatDate(lead.created_at)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-slate-500 py-8">Chưa có đăng ký</p>
          )}
        </div>
      </Card>

      {/* Recent Orders */}
      <Card className="border-slate-700 bg-slate-800/50 backdrop-blur p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Đơn hàng gần đây</h2>
          <Link href="/admin/orders">
            <Button variant="outline" size="sm">
              Xem tất cả
            </Button>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">
                  Đơn
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">
                  Khách hàng
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">
                  Số tiền
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">
                  Trạng thái
                </th>
              </tr>
            </thead>
            <tbody>
              {stats?.recentOrders && stats.recentOrders.length > 0 ? (
                stats.recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-slate-700 hover:bg-slate-900/50 transition-colors"
                  >
                    <td className="py-3 px-4 text-sm font-medium text-cyan-400">
                      #{order.order_number}
                    </td>
                    <td className="py-3 px-4 text-sm text-white">
                      {order.full_name}
                    </td>
                    <td className="py-3 px-4 text-sm text-white">
                      {formatCurrency(order.amount)}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === "paid"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : order.status === "pending"
                            ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                            : "bg-red-500/20 text-red-400 border border-red-500/30"
                        }`}
                      >
                        {order.status === "paid"
                          ? "Đã thanh toán"
                          : order.status === "pending"
                          ? "Chờ thanh toán"
                          : "Hết hạn"}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-slate-500">
                    Chưa có đơn hàng
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
