import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const verticals = [
  {
    name: "Digital Marketing",
    href: "https://digital.dataquotes.net/",
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.12)",
    problem: "Losing leads to competitors with better digital presence",
    chips: ["Lead Generation", "SEO", "Social Ads", "Email"],
    summary: "We build acquisition engines that deliver predictable, qualified leads. Our integrated approach combines organic and paid channels into a unified growth system.",
  },
  {
    name: "Edutech",
    href: "https://edutech.dataquotes.net/",
    color: "#10b981",
    glow: "rgba(16,185,129,0.12)",
    problem: "Skilled in theory, invisible to employers",
    chips: ["Certifications", "Live Projects", "Placement Support"],
    summary: "We bridge the gap between education and employment with industry-aligned certifications, real-world projects, and dedicated placement infrastructure.",
  },
  {
    name: "IT Services",
    href: "https://it.dataquotes.net/",
    color: "#818cf8",
    glow: "rgba(129,140,248,0.12)",
    problem: "No clear technology roadmap or internal systems",
    chips: ["Web & App Dev", "System Integration", "Tech Audits"],
    summary: "From MVP to enterprise architecture, we build technology that scales. Our audits identify gaps, and our engineering teams close them.",
  },
  {
    name: "K12 (juniors)",
    href: "https://k12.dataquotes.net/",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.12)",
    problem: "Schools need structured coding programs for kids",
    chips: ["After-School Coding", "Robotics", "Teacher Training"],
    summary: "Structured, curriculum-aligned coding and robotics programs designed for K-12. We also train educators to sustain the program independently.",
  },
];

export default function VerticalsSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);
  const sectionRef = useScrollAnimation();

  return (
    <section id="verticals" className="py-20 md:py-[120px]">
      <div
        className="section-animate max-w-[1400px] mx-auto px-4 sm:px-6"
        ref={sectionRef}
      >
        <h2 className="text-3xl md:text-[48px] md:leading-[1.15] text-foreground mb-4 stagger-child">
          Everything you need to grow.
        </h2>
        <p className="font-sans text-muted-foreground mb-8 md:mb-16 stagger-child max-w-xl">
          One integrated ecosystem — not four separate agencies.
        </p>

        {/* Desktop / tablet: balanced cards */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-6 stagger-child">
          {verticals.map((v) => (
            <div
              key={v.name}
              className="relative overflow-hidden rounded-2xl bg-card border border-border hover-lift p-5 flex flex-col gap-4"
              style={{ boxShadow: `0 22px 55px -28px ${v.glow}` }}
            >
              <div
                className="absolute inset-y-4 left-0 w-[3px] rounded-full"
                style={{ background: v.color }}
              />

              <div className="pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="inline-flex items-center justify-center w-7 h-7 rounded-full text-[13px]"
                    style={{
                      background: `${v.color}12`,
                      color: v.color,
                    }}
                  >
                    {v.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-sans font-semibold text-sm text-foreground">
                      {v.name}
                    </p>
                    <p className="font-mono text-[10px] text-muted-foreground/70 uppercase tracking-[0.16em]">
                      Vertical
                    </p>
                  </div>
                </div>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-3">
                  {v.problem}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {v.chips.map((c) => (
                    <span
                      key={c}
                      className="font-mono text-[10px] px-2 py-0.5 rounded-full border text-muted-foreground"
                      style={{
                        borderColor: `${v.color}40`,
                        background: `${v.color}0f`,
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-4">
                  {v.summary}
                </p>
                <a
                  href={v.href}
                  className="font-sans text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                >
                  View Details
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: simple accordion cards */}
        <div className="md:hidden space-y-3 stagger-child">
          {verticals.map((v, i) => {
            const isOpen = activeIdx === i;
            return (
              <div
                key={v.name}
                onClick={() => setActiveIdx(isOpen ? null : i)}
                className="w-full text-left relative overflow-hidden rounded-2xl bg-card border border-border p-4 transition-all duration-300 cursor-pointer"
                style={{
                  boxShadow: isOpen ? `0 18px 45px -26px ${v.glow}` : "none",
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIdx(isOpen ? null : i);
                  }
                }}
              >
                <div
                  className="absolute inset-y-3 left-0 w-[3px] rounded-full"
                  style={{ background: v.color }}
                />

                <div className="pl-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: v.color }}
                    />
                    <p className="font-sans font-semibold text-sm text-foreground">
                      {v.name}
                    </p>
                  </div>
                  <span className="font-mono text-muted-foreground text-xs">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                <p className="font-sans text-xs text-muted-foreground mt-2 leading-relaxed pl-4">
                  {v.problem}
                </p>

                {isOpen && (
                  <div
                    className="mt-3 space-y-2.5 pl-4"
                    style={{ animation: "hero-fade-up 200ms ease-out forwards" }}
                  >
                    <div className="flex flex-wrap gap-1.5">
                      {v.chips.map((c) => (
                        <span
                          key={c}
                          className="font-mono text-[10px] px-2 py-0.5 rounded-full border text-muted-foreground"
                          style={{
                            borderColor: `${v.color}40`,
                            background: `${v.color}0f`,
                          }}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                      {v.summary}
                    </p>
                    <a
                      href={v.href}
                      onClick={(e) => e.stopPropagation()}
                      className="font-sans text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                    >
                      View Details
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
