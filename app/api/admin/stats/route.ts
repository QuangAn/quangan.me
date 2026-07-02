import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

let supabase: ReturnType<typeof createClient> | null = null;

if (supabaseUrl && supabaseServiceKey) {
  supabase = createClient(supabaseUrl, supabaseServiceKey);
}

export async function GET(req: NextRequest) {
  try {
    if (!supabase) {
      return NextResponse.json(
        { error: "Supabase not configured" },
        { status: 500 }
      );
    }

    const authHeader = req.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (token !== process.env.ADMIN_SECRET_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Total leads
    const { count: totalLeads } = await supabase
      .from("course_leads")
      .select("*", { count: "exact", head: true });

    // Total orders and stats
    const { data: orderStats, count: totalOrders } = await supabase
      .from("orders")
      .select("status, amount", { count: "exact" });

    // Recent leads
    const { data: recentLeads } = await supabase
      .from("course_leads")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5);

    // Recent orders
    const { data: recentOrders } = await supabase
      .from("orders")
      .select("id, order_number, plan_name, amount, status, full_name, created_at")
      .order("created_at", { ascending: false })
      .limit(5);

    // Calculate stats
    const paidOrders =
      (orderStats as Array<{ status: string; amount: number }>)?.filter(
        (o) => o.status === "paid"
      ) || [];
    const pendingOrders =
      (orderStats as Array<{ status: string; amount: number }>)?.filter(
        (o) => o.status === "pending"
      ) || [];

    const totalRevenue = paidOrders.reduce(
      (sum, order) => sum + (order.amount || 0),
      0
    );

    return NextResponse.json({
      totalLeads: totalLeads || 0,
      totalOrders: totalOrders || 0,
      totalRevenue,
      pendingOrders: pendingOrders.length,
      paidOrders: paidOrders.length,
      recentLeads: recentLeads || [],
      recentOrders: recentOrders || [],
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
