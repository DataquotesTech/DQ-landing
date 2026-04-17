import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect, useRef } from "react";

const steps = [
  { number: "01", name: "Discover", role: "Strategy Team", desc: "Understand business goals, audit current state, identify growth levers.", color: "#3b82f6" },
  { number: "02", name: "Plan", role: "Architects", desc: "Design the blueprint — strategy, timelines, resource allocation.", color: "#6366f1" },
  { number: "03", name: "Build/Train", role: "Engineers", desc: "Execute on the plan — develop, train, and create deliverables.", color: "#818cf8" },
  { number: "04", name: "Launch", role: "Delivery Team", desc: "Deploy solutions, onboard teams, and begin live operations.", color: "#a78bfa" },
  { number: "05", name: "Scale", role: "Growth Leads", desc: "Optimize performance, expand reach, and compound results.", color: "#10b981" },
];

const flow = [
  { number: "01", name: "Start?", role: "Where do I start?", desc: "Understand your career goals, assess your current skills, and choose the right learning path.", color: "#3b82f6" },
  { number: "02", name: "Connect", role: "Connect With Us for career consultation", desc: "Get personalized guidance, clear roadmap, and structured plan to achieve your career goals.", color: "#6366f1" },
  { number: "03", name: "Trained", role: "Get trained by Industrial Experts", desc: "Learn industry-relevant skills through practical training, real-time projects, and expert mentorship.", color: "#818cf8" },
  { number: "04", name: "Preparation", role: "ATS Resume Building, LinkedIn Profile, Mock Interviews", desc: "Build a strong profile, prepare for interviews, and improve confidence with real-time practice.", color: "#a78bfa" },
  { number: "05", name: "Placed", role: "Get Placed in Dream Job", desc: "Secure job opportunities, attend interviews, and get placed in top companies with confidence.", color: "#10b981" },
];

function ProcessSection({ data, title, subtitle }) {
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
    <section className="py-12 md:py-[30px] bg-surface">
      <div className="section-animate max-w-[1400px] mx-auto px-4 sm:px-6" ref={sectionRef}>
        <h2 className="text-3xl md:text-[48px] md:leading-[1.15] text-foreground mb-4 stagger-child">
          {title}
        </h2>
        <p className="font-sans text-muted-foreground mb-12 md:mb-20 stagger-child">
          {subtitle}
        </p>

        {/* Desktop horizontal timeline */}
        <div className="relative stagger-child hidden sm:block">
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
            {data.map((item, i) => (
              <div
                key={item.number}
                className="text-center relative"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 border-2 transition-all duration-300"
                  style={{
                    borderColor: hovered === i ? item.color : "hsl(var(--border))",
                    background: hovered === i ? `${item.color}15` : "hsl(var(--background))",
                  }}
                >
                  <span className="font-mono text-xs font-semibold text-foreground">{item.number}</span>
                </div>
                <p className="font-sans font-semibold text-sm text-foreground">{item.name}</p>
                <p className="font-mono text-[10px] text-muted-foreground/60 mt-0.5">{item.role}</p>

                {hovered === i && (
                  <div
                    className="absolute z-20 w-44 p-3 rounded-xl glass-card text-left"
                    style={{
                      animation: "hero-fade-up 150ms ease-out forwards",
                      bottom: "calc(100% + 12px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      ...(i === 0 && { left: "0", transform: "translateX(0)" }),
                      ...(i === data.length - 1 && { left: "auto", right: "0", transform: "translateX(0)" }),
                    }}
                  >
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="sm:hidden space-y-4 stagger-child">
          {data.map((item) => (
            <div key={item.number} className="glass-card rounded-xl p-4 flex gap-4 items-start">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center border-2 shrink-0"
                style={{ borderColor: item.color, background: `${item.color}15` }}
              >
                <span className="font-mono text-xs font-semibold" style={{ color: item.color }}>{item.number}</span>
              </div>
              <div>
                <p className="font-sans font-semibold text-sm text-foreground">{item.name}</p>
                <p className="font-mono text-[10px] text-muted-foreground/60 mb-1">{item.role}</p>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProcessFramework() {
  return (
    <>
      <ProcessSection 
        data={steps}
        title={<>From <span className="text-primary">discovery</span> to scale.</>}
        subtitle="A process built for outcomes."
      />
      <ProcessSection 
        data={flow}
        title={<>From <span className="text-primary">where do I start?</span> I just got placed.</>}
        subtitle="A process built for outcomes."
      />
    </>
  );
}
