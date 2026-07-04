import { Sparkles, Mail, Phone, MessageCircle } from "lucide-react";
import { navLinks, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <a
              href="#top"
              className="flex items-center gap-2 font-bold tracking-tight"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                <Sparkles className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-lg">{siteConfig.name}</span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}. {siteConfig.coreMessage.join(" ")}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Khám phá</h3>
            <ul className="grid gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/hoc"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Khu vực học viên
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Liên hệ</h3>
            <ul className="grid gap-2.5">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" aria-hidden /> {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" aria-hidden /> {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MessageCircle className="h-4 w-4" aria-hidden /> Zalo:{" "}
                  {siteConfig.contact.zalo}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-foreground/70">
            © {new Date().getFullYear()} {siteConfig.name}. Bảo lưu mọi quyền.
          </p>
          <p className="text-xs text-muted-foreground">
            Xây dựng bằng Next.js, Tailwind CSS &amp; Supabase.
          </p>
        </div>
      </div>
    </footer>
  );
}
