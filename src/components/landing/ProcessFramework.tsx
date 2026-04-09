import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect, useRef } from "react";

const steps = [
  { number: "01", name: "Discover", role: "Strategy Team", desc: "Understand business goals, audit current state, identify growth levers.", color: "#3b82f6" },
  { number: "02", name: "Plan", role: "Architects", desc: "Design the blueprint — strategy, timelines, resource allocation.", color: "#6366f1" },
  { number: "03", name: "Build/Train", role: "Engineers", desc: "Execute on the plan — develop, train, and create deliverables.", color: "#818cf8" },
  { number: "04", name: "Launch", role: "Delivery Team", desc: "Deploy solutions, onboard teams, and begin live operations.", color: "#a78bfa" },
  { number: "05", name: "Scale", role: "Growth Leads", desc: "Optimize performance, expand reach, and compound results.", color: "#10b981" },
];

export default function ProcessFramework() {
  const sectionRef = useScrollAnimation();
  const [hovered, setHovered] = useState<number | null>(null);
  const [drawLine, setDrawLine] = useState(false);
  const lineRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawLine(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-[120px] bg-surface">
      <div className="section-animate max-w-[1400px] mx-auto px-4 sm:px-6" ref={sectionRef}>
        <h2 className="text-3xl md:text-[48px] md:leading-[1.15] text-foreground mb-4 stagger-child">
          From discovery to scale.
        </h2>
        <p className="font-sans text-muted-foreground mb-12 md:mb-20 stagger-child">
          A process built for outcomes.
        </p>

        {/* Desktop horizontal timeline */}
        <div className="relative stagger-child hidden sm:block">
          {/* Connecting line */}
          <div className="absolute top-6 left-0 right-0">
            <svg ref={lineRef} className="w-full h-1" viewBox="0 0 1000 4" preserveAspectRatio="none">
              <line
                x1="80" y1="2" x2="920" y2="2"
                stroke="hsl(var(--border))"
                strokeWidth="1.5"
                className={`draw-line ${drawLine ? "animate" : ""}`}
              />
            </svg>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 relative">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="text-center relative"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 border-2 transition-all duration-300"
                  style={{
                    borderColor: hovered === i ? step.color : "hsl(var(--border))",
                    background: hovered === i ? `${step.color}15` : "hsl(var(--background))",
                  }}
                >
                  <span className="font-mono text-xs font-semibold text-foreground">{step.number}</span>
                </div>
                <p className="font-sans font-semibold text-sm text-foreground">{step.name}</p>
                <p className="font-mono text-[10px] text-muted-foreground/60 mt-0.5">Led by {step.role}</p>

                {/* Tooltip */}
                {hovered === i && (
                  <div
                    className="absolute z-20 w-44 p-3 rounded-xl glass-card text-left"
                    style={{
                      animation: "hero-fade-up 150ms ease-out forwards",
                      bottom: "calc(100% + 12px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      /* Keep tooltip in viewport */
                      ...(i === 0 && { left: "0", transform: "translateX(0)" }),
                      ...(i === steps.length - 1 && { left: "auto", right: "0", transform: "translateX(0)" }),
                    }}
                  >
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stacked steps */}
        <div className="sm:hidden space-y-4 stagger-child">
          {steps.map((step) => (
            <div key={step.number} className="glass-card rounded-xl p-4 flex gap-4 items-start">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center border-2 shrink-0"
                style={{ borderColor: step.color, background: `${step.color}15` }}
              >
                <span className="font-mono text-xs font-semibold" style={{ color: step.color }}>{step.number}</span>
              </div>
              <div>
                <p className="font-sans font-semibold text-sm text-foreground">{step.name}</p>
                <p className="font-mono text-[10px] text-muted-foreground/60 mb-1">Led by {step.role}</p>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
