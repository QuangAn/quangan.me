"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { getAdminToken } from "@/lib/admin-auth";
import { Copy, Check, AlertCircle, Loader } from "lucide-react";

interface SettingsForm {
  sepay_api_key: string;
  sepay_webhook_url: string;
  bank_account_number: string;
  bank_account_name: string;
  bank_code: string;
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<SettingsForm>({
    sepay_api_key: "",
    sepay_webhook_url: "",
    bank_account_number: "",
    bank_account_name: "",
    bank_code: "",
  });

  const [bankDetails, setBankDetails] = useState({
    accountNumber: "",
    accountName: "",
    bankCode: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [copiedField, setCopiedField] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const token = getAdminToken();
      if (!token) throw new Error("Not authenticated");

      const response = await fetch("/api/admin/settings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch settings");

      const data = await response.json();
      setSettings({
        sepay_api_key: data.sepay_api_key || "",
        sepay_webhook_url: data.sepay_webhook_url || "",
        bank_account_number: data.bank_account_number || "",
        bank_account_name: data.bank_account_name || "",
        bank_code: data.bank_code || "",
      });
      setBankDetails(data.bankDetails || {});
      setWebhookUrl(data.webhookUrl || "");
    } catch (error) {
      setMessage("Không thể tải cài đặt");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      const token = getAdminToken();

      const response = await fetch("/api/admin/settings", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      });

      if (!response.ok) throw new Error("Failed to save settings");

      setMessage("Cài đặt đã được lưu thành công");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setMessage("Lỗi khi lưu cài đặt");
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 2000);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader className="w-6 h-6 animate-spin text-cyan-400" />
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Cài đặt</h1>
        <p className="text-slate-400">
          Quản lý kết nối API, webhook và thông tin tài khoản ngân hàng
        </p>
      </div>

      {message && (
        <div
          className={`p-4 rounded border ${
            message.includes("thành công")
              ? "bg-green-500/10 border-green-500/20 text-green-400"
              : "bg-red-500/10 border-red-500/20 text-red-400"
          }`}
        >
          {message}
        </div>
      )}

      {/* Webhook URL Section */}
      <Card className="border-slate-700 bg-slate-800/50 p-6">
        <h2 className="text-xl font-bold text-white mb-4">Webhook URL</h2>
        <p className="text-slate-400 text-sm mb-4">
          Dùng URL này để cấu hình webhook tại SePay hoặc các service thanh
          toán khác.
        </p>
        <div className="flex items-center gap-2 bg-slate-900/50 border border-slate-700 rounded p-3">
          <code className="flex-1 text-sm text-cyan-300 break-all font-mono">
            {webhookUrl || "https://example.com/api/sepay/webhook"}
          </code>
          {webhookUrl && (
            <button
              onClick={() => copyToClipboard(webhookUrl, "webhook")}
              className="flex-shrink-0 text-slate-500 hover:text-slate-300 transition-colors"
            >
              {copiedField === "webhook" ? (
                <Check className="w-5 h-5 text-green-400" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
      </Card>

      {/* Bank Details Section */}
      <Card className="border-slate-700 bg-slate-800/50 p-6">
        <h2 className="text-xl font-bold text-white mb-4">Thông tin tài khoản ngân hàng</h2>
        <p className="text-slate-400 text-sm mb-4">
          Những thông tin này được hiển thị công khai cho khách để chuyển tiền.
          Được load từ environment variables.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-slate-400 mb-2 block">
              Mã ngân hàng
            </label>
            <div className="flex items-center gap-2 bg-slate-900/50 border border-slate-700 rounded p-2">
              <code className="flex-1 text-sm text-white font-mono">
                {bankDetails.bankCode || "-"}
              </code>
              {bankDetails.bankCode && (
                <button
                  onClick={() =>
                    copyToClipboard(bankDetails.bankCode, "bankCode")
                  }
                  className="text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {copiedField === "bankCode" ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm text-slate-400 mb-2 block">
              Số tài khoản
            </label>
            <div className="flex items-center gap-2 bg-slate-900/50 border border-slate-700 rounded p-2">
              <code className="flex-1 text-sm text-white font-mono">
                {bankDetails.accountNumber || "-"}
              </code>
              {bankDetails.accountNumber && (
                <button
                  onClick={() =>
                    copyToClipboard(bankDetails.accountNumber, "accountNumber")
                  }
                  className="text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {copiedField === "accountNumber" ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              )}
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="text-sm text-slate-400 mb-2 block">
              Tên chủ tài khoản
            </label>
            <div className="flex items-center gap-2 bg-slate-900/50 border border-slate-700 rounded p-2">
              <code className="flex-1 text-sm text-white font-mono">
                {bankDetails.accountName || "-"}
              </code>
              {bankDetails.accountName && (
                <button
                  onClick={() =>
                    copyToClipboard(bankDetails.accountName, "accountName")
                  }
                  className="text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {copiedField === "accountName" ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded flex gap-3 text-sm text-blue-300">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p>
            Để thay đổi thông tin tài khoản, vui lòng cập nhật trong file
            <code className="bg-slate-900/50 px-2 py-1 rounded mx-1 text-cyan-300">
              .env.local
            </code>
            rồi deploy lại.
          </p>
        </div>
      </Card>

      {/* API Settings Section */}
      <Card className="border-slate-700 bg-slate-800/50 p-6">
        <h2 className="text-xl font-bold text-white mb-4">Cài đặt API</h2>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-white mb-2 block">
              SePay API Key
            </label>
            <Input
              type="password"
              value={settings.sepay_api_key}
              onChange={(e) =>
                setSettings({ ...settings, sepay_api_key: e.target.value })
              }
              placeholder="Nhập API key từ SePay"
              className="bg-slate-900/50 border-slate-700"
            />
            <p className="text-xs text-slate-500 mt-1">
              Khóa API để xác thực với SePay
            </p>
          </div>

          <div>
            <label className="text-sm font-medium text-white mb-2 block">
              SePay Webhook URL
            </label>
            <Input
              type="text"
              value={settings.sepay_webhook_url}
              onChange={(e) =>
                setSettings({ ...settings, sepay_webhook_url: e.target.value })
              }
              placeholder="https://example.com/api/sepay/webhook"
              className="bg-slate-900/50 border-slate-700"
            />
            <p className="text-xs text-slate-500 mt-1">
              URL webhook để nhận thông báo từ SePay
            </p>
          </div>
        </div>
      </Card>

      {/* Save Button */}
      <div className="flex gap-4">
        <Button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700"
        >
          {isSaving ? "Đang lưu..." : "Lưu cài đặt"}
        </Button>
        <Button
          onClick={fetchSettings}
          variant="outline"
          disabled={isSaving}
        >
          Hủy
        </Button>
      </div>

      {/* Info Box */}
      <Card className="border-slate-700 bg-slate-800/50 p-6 text-sm text-slate-300 space-y-3">
        <p>
          <strong>Lưu ý:</strong> Tất cả thông tin nhạy cảm (API key, webhook
          URL) nên được bảo vệ bằng HTTPS trong production.
        </p>
        <p>
          Để quản lý thông tin ngân hàng, vui lòng cập nhật biến môi trường:
        </p>
        <ul className="list-disc list-inside space-y-1 text-slate-400">
          <li>
            <code className="bg-slate-900/50 px-2 py-1 rounded text-cyan-300">
              BANK_CODE
            </code>
          </li>
          <li>
            <code className="bg-slate-900/50 px-2 py-1 rounded text-cyan-300">
              BANK_ACCOUNT_NUMBER
            </code>
          </li>
          <li>
            <code className="bg-slate-900/50 px-2 py-1 rounded text-cyan-300">
              BANK_ACCOUNT_NAME
            </code>
          </li>
          <li>
            <code className="bg-slate-900/50 px-2 py-1 rounded text-cyan-300">
              SEPAY_WEBHOOK_URL
            </code>
          </li>
        </ul>
      </Card>
    </div>
  );
}
