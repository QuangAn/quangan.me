/** Admin dashboard types */

export interface CourseLead {
  id: string;
  full_name: string;
  phone: string;
  email: string | null;
  learning_goal: string | null;
  note: string | null;
  source: string | null;
  created_at: string;
}

export interface AdminSettings {
  id: string;
  sepay_api_key: string | null;
  sepay_webhook_url: string | null;
  bank_account_number: string | null;
  bank_account_name: string | null;
  bank_code: string | null;
  updated_at: string;
}

export interface DashboardStats {
  totalLeads: number;
  totalOrders: number;
  totalRevenue: number;
  pendingOrders: number;
  paidOrders: number;
  recentLeads: CourseLead[];
  recentOrders: Array<{
    id: string;
    order_number: number;
    plan_name: string;
    amount: number;
    status: string;
    full_name: string;
    created_at: string;
  }>;
}
