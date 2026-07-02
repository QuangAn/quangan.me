import type { PlanId, PricingPlan } from "@/types";
import { siteConfig } from "./site";

/** Section: Pricing - các gói học phí. */
export const pricingPlans: PricingPlan[] = [
  {
    id: "tu-hoc",
    name: "Gói Tự Học",
    price: "1.990.000đ",
    priceValue: 1_990_000,
    description:
      "Tự học theo lộ trình dựng sẵn với kho dự án mẫu — làm theo từng bước, chủ động thời gian của bạn.",
    features: [
      "Lộ trình dựng sẵn 4 chặng · 8 module — đi từ con số 0 đến nhận dự án đầu tiên",
      "Kho dự án mẫu hoàn chỉnh — làm theo từng bước là ra sản phẩm",
      "Bộ prompt mẫu + tài liệu hướng dẫn chi tiết cho từng loại website",
      "Nhóm học viên hỗ trợ hỏi đáp khi gặp khó",
      "Đưa web lên Internet với tên miền riêng — sẵn sàng chạy ads, đón khách",
    ],
    featureGroups: [
      {
        title: "Bạn sẽ tự tay tạo được",
        icon: "target",
        grid: true,
        items: [
          "Landing page bán hàng",
          "Web giới thiệu sản phẩm",
          "Dashboard quản lý",
          "CRM & quản lý đơn hàng",
          "Portfolio cá nhân",
          "Công cụ nội bộ công ty",
        ],
      },
    ],
    valueNote: "Tiết kiệm ~2 triệu/năm tiền tool + hàng chục triệu tiền thuê dev",
    cta: "Đăng ký ngay",
    highlighted: false,
  },
  {
    id: "kem-cap-1-1",
    name: "Gói Kèm Cặp 1-1",
    badge: "Kèm đến khi hoàn thiện dự án",
    price: "6.990.000đ",
    priceValue: 6_990_000,
    description:
      "Kèm 1-1 theo yêu cầu — hướng dẫn từ cơ bản đến khi hoàn thiện dự án theo nhu cầu của bạn.",
    features: [
      "Toàn bộ quyền lợi Gói Tự Học: lộ trình 8 module + kho dự án mẫu",
      "Lộ trình cá nhân hóa theo đúng dự án bạn muốn làm",
      "Mentor kèm 1-1 từ cơ bản — chưa biết gì về code vẫn theo được",
      "Không dừng ở dự án mẫu: làm dự án thật theo nhu cầu của chính bạn",
    ],
    featureGroups: [
      {
        title: "Chỉ có ở gói này — người đồng hành cùng bạn",
        icon: "zap",
        items: [
          "Học 1-1 trực tiếp với mentor, lịch linh hoạt theo thời gian của bạn",
          "Hỗ trợ tận tay qua TeamViewer / UltraViewer",
          "Nhóm học viên kín, có dev kinh nghiệm hỗ trợ",
          "Cùng bạn sửa dự án cho tới khi chạy được",
          "Tư vấn cách thương mại hóa, kiếm tiền từ sản phẩm",
        ],
      },
      {
        title: "Cam kết đầu ra",
        icon: "shield",
        items: [
          "Kèm đến khi bạn hoàn thiện dự án theo nhu cầu của mình — ra sản phẩm thật, dùng được",
          "Hỗ trợ sửa lỗi trọn đời qua nhóm kín",
        ],
      },
      {
        title: "Quà tặng thêm",
        icon: "gift",
        items: ["Hướng dẫn tích hợp AI vào kinh doanh thực tế"],
      },
    ],
    valueNote: "Tiết kiệm thêm ~2 triệu/năm tiền mua tool khi học",
    cta: "Đăng ký ngay",
    highlighted: true,
  },
];

/** Tìm gói học theo id — dùng khi tạo đơn hàng. */
export function getPlanById(id: string): PricingPlan | undefined {
  return pricingPlans.find((plan) => plan.id === id);
}

/** Type guard: chuỗi bất kỳ có phải là PlanId hợp lệ không. */
export function isPlanId(value: string): value is PlanId {
  return pricingPlans.some((plan) => plan.id === value);
}

/** Dòng liên hệ cho nhu cầu đội nhóm / doanh nghiệp (thay cho một gói riêng). */
export const enterpriseNote = {
  text: "Cần đào tạo cho đội nhóm hoặc doanh nghiệp?",
  cta: "Liên hệ tư vấn riêng",
  href: `https://zalo.me/${siteConfig.contact.zalo.replace(/\s/g, "")}`,
};

/** Cam kết / bảo đảm hiển thị dưới bảng giá. */
export const pricingGuarantees = [
  { icon: "shield" as const, text: "Hỗ trợ đến khi bạn làm được sản phẩm đầu tiên" },
  { icon: "clock" as const, text: "Lộ trình & dự án mẫu dùng trọn đời" },
  { icon: "sparkles" as const, text: "Cập nhật nội dung mới không mất phí" },
];
