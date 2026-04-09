import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const questions = [
  { q: "How much does a typical engagement cost?", a: "Engagements vary based on scope. Digital marketing starts at ₹50K/month, IT projects from ₹2L, and training programs are priced per cohort. We always start with a free consultation to scope and quote accurately." },
  { q: "How long before I see results from Digital Marketing?", a: "Paid channels deliver leads within 2-4 weeks. SEO shows meaningful movement in 3-6 months. We set realistic timelines upfront and report weekly." },
  { q: "What is the placement support process for students?", a: "Students go through resume building, mock interviews, soft skills training, and are connected with our network of 120+ hiring partners. We support until placed." },
  { q: "Can DataQuotes build custom software for my business?", a: "Yes. Our IT Services vertical handles everything from MVPs to enterprise platforms — web, mobile, cloud migration, and system integration." },
  { q: "How do Juniors programs integrate with school curricula?", a: "We map our coding and robotics modules to CBSE/ICSE/State board frameworks, ensuring they complement rather than compete with existing subjects." },
  { q: "Who owns the deliverables?", a: "You do. All code, content, designs, and data belong to you from day one. We believe in transparent, ownership-first partnerships." },
  { q: "Can I work with multiple verticals simultaneously?", a: "Absolutely. That's our core strength. Many clients engage 2-3 verticals at once — for example, Digital Marketing + IT Services for a complete digital transformation." },
  { q: "What ongoing support is available post-launch?", a: "We offer retainer plans for marketing, AMC for software, and ongoing training partnerships. Every engagement includes 30 days of post-delivery support at no extra cost." },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const sectionRef = useScrollAnimation();

  const col1 = questions.slice(0, 4);
  const col2 = questions.slice(4);

  const toggle = (globalIdx: number) => {
    setOpenIdx(openIdx === globalIdx ? null : globalIdx);
  };

  const renderQuestion = (item: typeof questions[0], idx: number) => (
    <div key={idx} className="border-b" style={{ borderColor: "hsl(var(--border))" }}>
      <button
        onClick={() => toggle(idx)}
        className="w-full flex items-center justify-between py-4 text-left gap-4 group"
      >
        <span className="font-sans font-medium text-sm text-foreground group-hover:text-primary transition-colors leading-relaxed pr-2">
          {item.q}
        </span>
        <span
          className="font-mono text-muted-foreground text-lg shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-200"
          style={{
            background: openIdx === idx ? "hsl(var(--primary) / 0.15)" : "transparent",
            color: openIdx === idx ? "hsl(var(--primary))" : undefined,
          }}
        >
          {openIdx === idx ? "−" : "+"}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: openIdx === idx ? "200px" : "0" }}
      >
        <p className="font-sans text-sm text-muted-foreground pb-5 leading-relaxed">{item.a}</p>
      </div>
    </div>
  );

  return (
    <section className="py-20 md:py-[120px] bg-surface">
      <div className="section-animate max-w-[1400px] mx-auto px-4 sm:px-6" ref={sectionRef}>
        <h2 className="text-3xl md:text-[48px] md:leading-[1.15] text-foreground mb-4 stagger-child">
          Frequently asked questions.
        </h2>
        <p className="font-sans text-muted-foreground mb-10 md:mb-16 stagger-child">
          Everything you need to know before getting started.
        </p>

        {/* Mobile: single column | Desktop: 2 columns */}
        <div className="block md:hidden stagger-child">
          {questions.map((item, i) => renderQuestion(item, i))}
        </div>
        <div className="hidden md:grid grid-cols-2 gap-x-12 lg:gap-x-20 stagger-child">
          <div>{col1.map((item, i) => renderQuestion(item, i))}</div>
          <div>{col2.map((item, i) => renderQuestion(item, i + 4))}</div>
        </div>

        <div className="mt-12 text-center stagger-child">
          <a
            href="#contact"
            className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Still have questions?{" "}
            <span className="text-primary font-semibold hover:underline">Start a Conversation →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
