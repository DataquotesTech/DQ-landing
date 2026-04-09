import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const painPoints = [
  { text: "No consistent lead flow", verticalIdx: 0 },
  { text: "Digital presence built in silos", verticalIdx: 0 },
  { text: "No skilled team", verticalIdx: 1 },
  { text: "No technology roadmap", verticalIdx: 2 },
  { text: "Students graduating without placement", verticalIdx: 1 },
  { text: "Kids without digital foundations", verticalIdx: 3 },
];

const solutions = [
  { name: "Digital Marketing", color: "#3b82f6", desc: "Predictable lead generation through integrated digital channels." },
  { name: "Edutech", color: "#10b981", desc: "Industry-ready training with guaranteed placement pathways." },
  { name: "IT Services", color: "#818cf8", desc: "End-to-end technology strategy, build, and maintenance." },
  { name: "Juniors", color: "#f59e0b", desc: "Structured coding & robotics programs for K-12 students." },
];

export default function ProblemSolution() {
  const [hovered, setHovered] = useState<number | null>(null);
  const sectionRef = useScrollAnimation();
  const activeVertical = hovered !== null ? painPoints[hovered].verticalIdx : null;

  return (
    <section id="solutions" className="py-20 md:py-[120px] bg-surface">
      <div className="section-animate max-w-[1400px] mx-auto px-4 sm:px-6" ref={sectionRef}>
        <h2 className="text-3xl md:text-[48px] md:leading-[1.15] text-foreground mb-4 stagger-child">
          Every pain has a system.
        </h2>
        <p className="font-sans text-muted-foreground mb-10 md:mb-16 stagger-child">Here's ours.</p>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-16">
          {/* Pain points */}
          <div className="space-y-2">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60 mb-4 stagger-child">
              Common Challenges
            </p>
            {painPoints.map((p, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="stagger-child flex items-start gap-3 py-3 px-4 rounded-lg cursor-pointer group transition-all duration-200 hover:bg-white/5"
              >
                <span className="text-red-400 font-mono text-sm mt-0.5 shrink-0">✗</span>
                <span className="font-sans text-sm text-foreground/80 group-hover:text-primary transition-colors leading-relaxed">
                  {p.text}
                </span>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60 mb-4 stagger-child">
              Our Solutions
            </p>
            {solutions.map((s, i) => (
              <div
                key={s.name}
                className="stagger-child glass-card rounded-xl p-5 transition-all duration-300"
                style={{
                  borderColor: activeVertical === i ? s.color : "rgba(255,255,255,0.06)",
                  borderWidth: "1px",
                  borderLeftWidth: "3px",
                  borderLeftColor: activeVertical === i ? s.color : "rgba(255,255,255,0.1)",
                  background: activeVertical === i ? `${s.color}10` : "rgba(255,255,255,0.03)",
                  opacity: activeVertical !== null && activeVertical !== i ? 0.4 : 1,
                }}
              >
                <p className="font-sans font-semibold text-sm text-foreground">{s.name}</p>
                <p className="font-sans text-xs text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
