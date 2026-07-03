import { courseSections } from "@/config/course-content";
import type { CourseSection, PlanId } from "@/types";

/** Xếp hạng gói để so quyền truy cập nội dung (số lớn = quyền cao hơn). */
const PLAN_RANK: Record<PlanId, number> = {
  "tu-hoc": 1,
  "kem-cap-1-1": 2,
};

function rankOf(plan: string): number {
  return PLAN_RANK[plan as PlanId] ?? 0;
}

/** Hạng của một gói (số lớn = quyền cao hơn). Dùng để tránh hạ cấp khi mua thêm. */
export function getPlanRank(plan: string): number {
  return rankOf(plan);
}

/**
 * Danh sách chương học viên được xem theo gói đã mua: chương không giới hạn
 * (minPlan trống) hiện với mọi gói; chương có minPlan chỉ hiện khi gói của học
 * viên đủ hạng.
 */
export function getSectionsForPlan(plan: string): CourseSection[] {
  const rank = rankOf(plan);
  return courseSections
    .filter((section) => !section.minPlan || rank >= rankOf(section.minPlan))
    .sort((a, b) => a.order - b.order);
}
