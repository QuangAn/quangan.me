"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { getAdminToken } from "@/lib/admin-auth";
import { Search, ChevronLeft, ChevronRight, Copy } from "lucide-react";
import type { Order } from "@/types/index";

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const pageSize = 20;

  useEffect(() => {
    fetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search, status]);

  const fetchOrders = async () => {
    try {
      setIsLoading(true);
      const token = getAdminToken();
      if (!token) throw new Error("Not authenticated");

      const params = new URLSearchParams({
        limit: pageSize.toString(),
        offset: (page * pageSize).toString(),
        ...(search && { search }),
        ...(status && { status }),
      });

      const response = await fetch(`/api/admin/orders?${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch orders");

      const data = await response.json();
      setOrders(data.data);
      setTotal(data.total);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to load orders"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const getStatusBadge = (status: string) => {
    const baseClass = "px-3 py-1 rounded-full text-xs font-medium border";
    switch (status) {
      case "paid":
        return `${baseClass} bg-green-500/20 text-green-400 border-green-500/30`;
      case "pending":
        return `${baseClass} bg-orange-500/20 text-orange-400 border-orange-500/30`;
      case "expired":
        return `${baseClass} bg-red-500/20 text-red-400 border-red-500/30`;
      default:
        return `${baseClass} bg-slate-500/20 text-slate-400 border-slate-500/30`;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "paid":
        return "Đã thanh toán";
      case "pending":
        return "Chờ thanh toán";
      case "expired":
        return "Hết hạn";
      default:
        return status;
    }
  };

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Quản lý đơn hàng</h1>
        <p className="text-slate-400">{total} đơn hàng</p>
      </div>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded text-red-400">
          {error}
        </div>
      )}

      {/* Filters */}
      <Card className="border-slate-700 bg-slate-800/50 p-4 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
            <Input
              placeholder="Tìm theo tên, số điện thoại, mã CK..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(0);
              }}
              className="pl-10 bg-slate-900/50 border-slate-700"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {["all", "pending", "paid", "expired"].map((s) => (
            <Button
              key={s}
              variant={status === s ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setStatus(s);
                setPage(0);
              }}
              className={
                status === s
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-600"
                  : ""
              }
            >
              {s === "all"
                ? "Tất cả"
                : s === "pending"
                ? "Chờ thanh toán"
                : s === "paid"
                ? "Đã thanh toán"
                : "Hết hạn"}
            </Button>
          ))}
        </div>
      </Card>

      {/* Table */}
      <Card className="border-slate-700 bg-slate-800/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-900/50">
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-400">
                  Đơn
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-400">
                  Khách hàng
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-400">
                  Mã chuyển khoản
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-400">
                  Số tiền
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-400">
                  Trạng thái
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-400">
                  Ngày tạo
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-500">
                    Đang tải...
                  </td>
                </tr>
              ) : orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-slate-700 hover:bg-slate-900/50 transition-colors"
                  >
                    <td className="py-4 px-6 text-sm font-medium text-cyan-400">
                      #{order.order_number}
                    </td>
                    <td className="py-4 px-6 text-sm">
                      <div className="text-white">{order.full_name}</div>
                      <div className="text-xs text-slate-500">{order.phone}</div>
                    </td>
                    <td className="py-4 px-6 text-sm">
                      <div className="flex items-center gap-2">
                        <code className="text-xs bg-slate-900/50 px-2 py-1 rounded font-mono text-cyan-300">
                          {order.transfer_code}
                        </code>
                        <button
                          onClick={() =>
                            copyToClipboard(order.transfer_code)
                          }
                          className="text-slate-500 hover:text-slate-300 transition-colors"
                          title="Copy"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-white font-medium">
                      {formatCurrency(order.amount)}
                    </td>
                    <td className="py-4 px-6 text-sm">
                      <span className={getStatusBadge(order.status)}>
                        {getStatusLabel(order.status)}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-400">
                      {new Date(order.created_at).toLocaleDateString(
                        "vi-VN"
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-500">
                    Không tìm thấy dữ liệu
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between p-6 border-t border-slate-700">
            <p className="text-sm text-slate-400">
              Trang {page + 1} / {totalPages} • Tổng cộng {total} mục
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={page === 0}
                onClick={() => setPage(page - 1)}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={page >= totalPages - 1}
                onClick={() => setPage(page + 1)}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </Card>

      {/* Info Box */}
      <Card className="border-slate-700 bg-slate-800/50 p-6 text-sm text-slate-300">
        <p className="mb-2">
          <strong>Ghi chú:</strong> Mã chuyển khoản là mã duy nhất mà khách phải
          ghi vào nội dung chuyển khoản. Hệ thống sẽ tự động đối soát và cập
          nhật trạng thái đơn hàng.
        </p>
      </Card>
    </div>
  );
}
