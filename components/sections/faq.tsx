import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/config/faqs";

export function Faq() {
  return (
    <Section id="faq">
      <SectionHeading
        eyebrow="Hỏi đáp"
        title="Câu hỏi thường gặp"
        description="Những băn khoăn phổ biến nhất trước khi bắt đầu. Nếu bạn còn thắc mắc khác, hãy để lại thông tin để được tư vấn trực tiếp."
      />

      <Reveal className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}
