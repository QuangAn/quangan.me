// Deployment Vercel của dự án Cafe Aroma (repo D:\VibeCode\coffeshop, project
// Vercel "cafe-aroma"). App đó build với basePath /du-an/coffe-shop nên chỉ cần
// proxy nguyên prefix — trang, /api, /_next/* đều nằm dưới path này.
// Đổi domain → đặt env CAFE_AROMA_ORIGIN trên Vercel, không cần sửa code.
const CAFE_AROMA_ORIGIN =
  process.env.CAFE_AROMA_ORIGIN || "https://cafe-aroma-silk.vercel.app";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Cho phép build vào thư mục khác khi .next đang bị dev server chiếm dụng
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    remotePatterns: [
      // Ảnh mã QR VietQR do SePay sinh cho trang thanh toán
      { protocol: "https", hostname: "qr.sepay.vn" },
    ],
  },
  // Multi-zones: nhúng site Cafe Aroma dưới quangan.me/du-an/coffe-shop
  async rewrites() {
    return [
      {
        source: "/du-an/coffe-shop",
        destination: `${CAFE_AROMA_ORIGIN}/du-an/coffe-shop`,
      },
      {
        source: "/du-an/coffe-shop/:path+",
        destination: `${CAFE_AROMA_ORIGIN}/du-an/coffe-shop/:path+`,
      },
    ];
  },
};

export default nextConfig;
