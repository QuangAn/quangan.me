"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { adminFetch } from "@/lib/admin-auth";
import { Search, Download, ChevronLeft, ChevronRight } from "lucide-react";
import type { CourseLead } from "@/types/admin";

export default function LeadsPage() {
  const [leads, setLeads] = useState<CourseLead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [isExporting, setIsExporting] = useState(false);

  const pageSize = 20;

  useEffect(() => {
    fetchLeads();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search]);

  const fetchLeads = async () => {
    try {
      setIsLoading(true);
      const params = new URLSearchParams({
        limit: pageSize.toString(),
        offset: (page * pageSize).toString(),
        ...(search && { search }),
      });

      const response = await adminFetch(`/api/admin/leads?${params}`);

      if (!response.ok) throw new Error("Failed to fetch leads");

      const data = await response.json();
      setLeads(data.data);
      setTotal(data.total);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to load leads";
      setError(errorMessage);
      console.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const exportToCSV = async () => {
    try {
      setIsExporting(true);
      const response = await adminFetch(`/api/admin/leads?limit=999999&offset=0`);

      if (!response.ok) throw new Error("Export failed");

      const data = await response.json();
      const leads = data.data as CourseLead[];

      // Create CSV
      const headers = [
        "Họ tên",
        "Số điện thoại",
        "Email",
        "Mục tiêu học",
        "Ghi chú",
        "Nguồn",
        "Ngày đăng ký",
      ];
      const rows = leads.map((lead) => [
        lead.full_name,
        lead.phone,
        lead.email || "",
        lead.learning_goal || "",
        lead.note || "",
        lead.source || "",
        new Date(lead.created_at).toLocaleString("vi-VN"),
      ]);

      const csv =
        [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");

      // Download
      const blob = new Blob([csv], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError("Xuất dữ liệu thất bại");
    } finally {
      setIsExporting(false);
    }
  };

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Quản lý đăng ký</h1>
        <p className="text-slate-400">
          {total} học viên đã đăng ký tư vấn khóa học
        </p>
      </div>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded text-red-400">
          {error}
        </div>
      )}

      {/* Search & Export */}
      <Card className="border-slate-700 bg-slate-800/50 p-4 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
          <Input
            placeholder="Tìm theo tên, số điện thoại, email..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(0);
            }}
            className="pl-10 bg-slate-900/50 border-slate-700"
          />
        </div>
        <Button
          onClick={exportToCSV}
          disabled={isExporting}
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-cyan-600"
        >
          <Download className="w-4 h-4" />
          {isExporting ? "Đang xuất..." : "Xuất CSV"}
        </Button>
      </Card>

      {/* Table */}
      <Card className="border-slate-700 bg-slate-800/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-900/50">
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-400">
                  Họ tên
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-400">
                  Số điện thoại
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-400">
                  Email
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-400">
                  Mục tiêu
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-slate-400">
                  Ngày đăng ký
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-slate-500">
                    Đang tải...
                  </td>
                </tr>
              ) : leads.length > 0 ? (
                leads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="border-b border-slate-700 hover:bg-slate-900/50 transition-colors"
                  >
                    <td className="py-4 px-6 text-sm font-medium text-white">
                      {lead.full_name}
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-300">
                      <a
                        href={`tel:${lead.phone}`}
                        className="hover:text-cyan-400 transition-colors"
                      >
                        {lead.phone}
                      </a>
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-300">
                      {lead.email ? (
                        <a
                          href={`mailto:${lead.email}`}
                          className="hover:text-cyan-400 transition-colors"
                        >
                          {lead.email}
                        </a>
                      ) : (
                        <span className="text-slate-500">-</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-300 max-w-xs">
                      {lead.learning_goal || (
                        <span className="text-slate-500">-</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-sm text-slate-400">
                      {new Date(lead.created_at).toLocaleDateString(
                        "vi-VN"
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-slate-500">
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
    </div>
  );
}
