import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import { isAuthorizedAdmin } from "@/lib/admin-api";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

let supabase: ReturnType<typeof createClient> | null = null;

if (supabaseUrl && supabaseServiceKey) {
  supabase = createClient(supabaseUrl, supabaseServiceKey);
}

// Initialize admin settings table if it doesn't exist
async function initializeSettingsTable() {
  if (!supabase) throw new Error("Supabase not configured");
  // Table is created via migrations, not RPC
  // This is a placeholder for future use
}

export async function GET(req: NextRequest) {
  try {
    if (!isAuthorizedAdmin(req)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!supabase) {
      return NextResponse.json(
        { error: "Supabase not configured" },
        { status: 500 }
      );
    }

    // Get webhook URL from environment
    const webhookUrl = process.env.SEPAY_WEBHOOK_URL || "";

    // Get settings from Supabase (if table exists)
    const { data, error } = await supabase
      .from("admin_settings")
      .select("*")
      .limit(1)
      .single();

    if (error && error.code !== "PGRST116") {
      // PGRST116 = no rows returned
      console.warn("Settings fetch error:", error);
    }

    const settings = data || { id: "1" };

    return NextResponse.json({
      ...settings,
      webhookUrl,
      bankDetails: {
        bankCode: process.env.BANK_CODE || "",
        accountNumber: process.env.BANK_ACCOUNT_NUMBER || "",
        accountName: process.env.BANK_ACCOUNT_NAME || "",
      },
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

    if (!supabase) {
      return NextResponse.json(
        { error: "Supabase not configured" },
        { status: 500 }
      );
    }

    // Parse request body for future use
    await req.json();

    await initializeSettingsTable();

    // Note: Storing API keys in Supabase is optional
    // For MVP, we store them in .env.local
    // This endpoint is here for future extensibility

    return NextResponse.json({
      success: true,
      message:
        "Settings configured. Use .env.local for sensitive data like API keys.",
    });
  } catch (error) {
    console.error("Error updating settings:", error);
    return NextResponse.json(
      { error: "Failed to update settings" },
      { status: 500 }
    );
  }
}
