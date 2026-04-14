import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const painPoints = [
  { text: "Lack of Clear ROI Measurement", verticalIdx: 0 },
  { text: "Conversion Optimization", verticalIdx: 0 },
  { text: "Gap Between Academic Learning and Industry Requirements", verticalIdx: 1 },
  { text: "Lack of Hands-on Project Experience", verticalIdx: 1 },
  { text: "CRM & ERP Implementation", verticalIdx: 2 },
  { text: "Software Development & Custom Solutions", verticalIdx: 2 },
  { text: "Data Analytics & Business Intelligence", verticalIdx: 2 },
  { text: "Limited Exposure to Future Technologies", verticalIdx: 3 },
  { text: "Academic year collaboration ", verticalIdx: 3 },
];

const solutions = [
  { name: "Digital Marketing", color: "#3b82f6", desc: "Predictable lead generation through integrated digital channels." },
  { name: "Edutech", color: "#10b981", desc: "Industry-ready training with guaranteed placement pathways." },
  { name: "TechGlobal (IT Services)", color: "#818cf8", desc: "End-to-end technology strategy, build, and maintenance." },
  { name: "K12 (juniors)", color: "#f59e0b", desc: "Structured coding & robotics programs for K-12 students." },
];

export default function ProblemSolution() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [connectorPath, setConnectorPath] = useState<string | null>(null);
  const sectionRef = useScrollAnimation();
  const layoutRef = useRef<HTMLDivElement | null>(null);
  const painTextRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const solutionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const activeVertical = hovered !== null ? painPoints[hovered].verticalIdx : null;

  useEffect(() => {
    const updateConnector = () => {
      if (hovered === null || activeVertical === null) {
        setConnectorPath(null);
        return;
      }

      const layoutEl = layoutRef.current;
      const painTextEl = painTextRefs.current[hovered];
      const solutionEl = solutionRefs.current[activeVertical];

      if (!layoutEl || !painTextEl || !solutionEl) {
        setConnectorPath(null);
        return;
      }

      const layoutRect = layoutEl.getBoundingClientRect();
      const painRect = painTextEl.getBoundingClientRect();
      const solutionRect = solutionEl.getBoundingClientRect();

      const startX = painRect.right - layoutRect.left + 10;
      const startY = painRect.top - layoutRect.top + painRect.height / 2;
      const endX = solutionRect.left - layoutRect.left - 10;
      const endY = solutionRect.top - layoutRect.top + solutionRect.height / 2;
      const controlX = (startX + endX) / 2;

      setConnectorPath(
        `M ${startX} ${startY} C ${controlX} ${startY}, ${controlX} ${endY}, ${endX} ${endY}`,
      );
    };

    updateConnector();
    window.addEventListener("resize", updateConnector);

    return () => {
      window.removeEventListener("resize", updateConnector);
    };
  }, [hovered, activeVertical]);

  return (
    <section id="solutions" className="py-20 md:py-[10px] bg-surface">
      <div className="section-animate max-w-[1400px] mx-auto px-4 sm:px-6" ref={sectionRef}>
        <h2 className="text-3xl md:text-[48px] md:leading-[1.15] text-foreground mb-4 stagger-child">
          Every pain has a system.
        </h2>
        <p className="font-sans text-muted-foreground mb-10 md:mb-16 stagger-child">Here's ours.</p>

        <div ref={layoutRef} className="relative grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-16">
          {connectorPath && activeVertical !== null && (
            <svg
              aria-hidden="true"
              className="pointer-events-none hidden lg:block absolute inset-0 z-10 overflow-visible"
              width="100%"
              height="100%"
            >
              <defs>
                <marker
                  id={`connector-arrow-${activeVertical}`}
                  markerWidth="8"
                  markerHeight="8"
                  refX="7"
                  refY="4"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M 0 0 L 8 4 L 0 8 z" fill={solutions[activeVertical].color} opacity="0.95" />
                </marker>
              </defs>
              <path
                d={connectorPath}
                stroke={solutions[activeVertical].color}
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="4 4"
                opacity="0.9"
                markerEnd={`url(#connector-arrow-${activeVertical})`}
              />
            </svg>
          )}

          {/* Pain points */}
          <div className="space-y-2 relative z-20">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60 mb-4 stagger-child">
              Common Challenges
            </p>
            {painPoints.map((p, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="stagger-child relative overflow-visible flex items-start gap-3 py-3 px-4 rounded-lg cursor-pointer group transition-all duration-200 hover:bg-white/5"
              >
                <span className="text-red-400 font-mono text-sm mt-0.5 shrink-0">✗</span>
                <span
                  ref={(el) => {
                    painTextRefs.current[i] = el;
                  }}
                  className="font-sans text-sm text-foreground/80 group-hover:text-primary transition-colors leading-relaxed"
                >
                  {p.text}
                </span>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-3 relative z-20">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60 mb-4 stagger-child">
              Our Solutions
            </p>
            {solutions.map((s, i) => (
              <div
                key={s.name}
                ref={(el) => {
                  solutionRefs.current[i] = el;
                }}
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
