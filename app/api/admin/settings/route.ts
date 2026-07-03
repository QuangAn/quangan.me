import { NextRequest, NextResponse } from "next/server";
import { isAuthorizedAdmin } from "@/lib/admin-api";
import { getBankInfo } from "@/lib/payment";
import { getSupabaseServiceClient } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  try {
    if (!isAuthorizedAdmin(req)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = getSupabaseServiceClient();
    if (!supabase) {
      return NextResponse.json(
        { error: "Supabase not configured" },
        { status: 500 }
      );
    }

    const { data, error } = await supabase
      .from("admin_settings")
      .select("*")
      .eq("id", "1")
      .maybeSingle();

    if (error) console.warn("Settings fetch error:", error);

    const envFallback = getBankInfo();
    const envWebhookUrl = process.env.SEPAY_WEBHOOK_URL || "";

    return NextResponse.json({
      sepay_api_key: data?.sepay_api_key || "",
      sepay_webhook_url: data?.sepay_webhook_url || envWebhookUrl,
      bank_code: data?.bank_code || envFallback.bankCode,
      bank_account_number: data?.bank_account_number || envFallback.accountNumber,
      bank_account_name: data?.bank_account_name || envFallback.accountName,
    });
  } catch (error) {
    console.error("Error fetching settings:", error);
    return NextResponse.json(
      { error: "Failed to fetch settings" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    if (!isAuthorizedAdmin(req)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = getSupabaseServiceClient();
    if (!supabase) {
      return NextResponse.json(
        { error: "Supabase not configured" },
        { status: 500 }
      );
    }

    const body = await req.json();

    const { error } = await supabase.from("admin_settings").upsert(
      {
        id: "1",
        sepay_api_key: body.sepay_api_key || null,
        sepay_webhook_url: body.sepay_webhook_url || null,
        bank_code: body.bank_code || null,
        bank_account_number: body.bank_account_number || null,
        bank_account_name: body.bank_account_name || null,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "id" }
    );

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating settings:", error);
    return NextResponse.json(
      { error: "Failed to update settings" },
      { status: 500 }
    );
  }
}
