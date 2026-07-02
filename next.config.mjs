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
};

export default nextConfig;
