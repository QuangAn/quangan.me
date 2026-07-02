import { Navbar } from "@/components/navbar";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { Hero } from "@/components/sections/hero";
import { PainPoints } from "@/components/sections/pain-points";
import { Solution } from "@/components/sections/solution";
import { Outcomes } from "@/components/sections/outcomes";
import { Modules } from "@/components/sections/modules";
import { Projects } from "@/components/sections/projects";
import { Audience } from "@/components/sections/audience";
import { Roadmap } from "@/components/sections/roadmap";
import { Instructor } from "@/components/sections/instructor";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { siteConfig } from "@/config/site";
import { modules } from "@/config/modules";
import { faqs } from "@/config/faqs";

/** Structured data giúp Google hiểu đây là một khóa học + FAQ. */
function StructuredData() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: siteConfig.name,
    description: siteConfig.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    hasCourseInstance: modules.map((m) => ({
      "@type": "CourseInstance",
      name: `Module ${m.order}: ${m.title}`,
      courseMode: "online",
      description: m.result,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <Outcomes />
        <Modules />
        <Projects />
        <Audience />
        <Roadmap />
        <Instructor />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
