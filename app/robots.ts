import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /admin dùng client layout nên không set được noindex metadata; chặn tại robots.
      // (/hoc và /thanh-toan đã có noindex ở từng trang.)
      disallow: ["/admin"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
