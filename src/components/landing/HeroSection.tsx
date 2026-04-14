import { useState, useRef, useEffect } from "react";

const verticals = [
  {
    name: "Edutech",
    tagline: "Career-ready graduates, not just certificates",
    chips: ["Certifications", "Live Projects", "Placement"],
    href: "https://edutech.dataquotes.net/",
    color: "#10b981",
    glow: "rgba(16, 185, 129, 0.18)",
  },
  {
    name: "TechGlobal (IT Services)",
    tagline: "Technology that scales with your ambition",
    chips: ["Web & App", "Integration", "Tech Audits"],
    href: "https://it.dataquotes.net/",
    color: "#818cf8",
    glow: "rgba(129, 140, 248, 0.18)",
  },
  {
    name: "K12 (juniors)",
    tagline: "Building digital foundations for the next generation",
    chips: ["Coding", "Robotics", "Teacher Training"],
    href: "https://k12.dataquotes.net/",
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.18)",
  },
  {
    name: "Digital Marketing",
    tagline: "Engineered lead generation at scale",
    chips: ["Lead Gen", "SEO", "Social Ads"],
    href: "https://digital.dataquotes.net/",
    color: "#3b82f6",
    glow: "rgba(59, 130, 246, 0.18)",
  }
];

const floatingChips = [
  { label: "SEO", x: "8%", delay: "0s", duration: "6s" },
  { label: "Scale", x: "18%", delay: "1.2s", duration: "7.5s" },
  { label: "Data", x: "30%", delay: "0.4s", duration: "5.5s" },
  { label: "AI", x: "55%", delay: "2s", duration: "8s" },
  { label: "Growth", x: "70%", delay: "0.8s", duration: "6.5s" },
  { label: "Leads", x: "82%", delay: "1.6s", duration: "7s" },
  { label: "Placements", x: "92%", delay: "0.3s", duration: "5s" },
];

export default function HeroSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden"
    >

      {/* ── Animated Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Mesh orb 1 — blue */}
        <div
          className="absolute -top-1/4 -left-1/4 w-[700px] h-[700px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 65%)",
            animation: "orb-float-1 12s ease-in-out infinite",
          }}
        />

        {/* Mesh orb 2 — indigo */}
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(129,140,248,0.4) 0%, transparent 65%)",
            animation: "orb-float-2 15s ease-in-out infinite",
          }}
        />

        {/* Mesh orb 3 — teal */}
        <div
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(20,184,166,0.45) 0%, transparent 65%)",
            animation: "orb-float-3 10s ease-in-out infinite",
          }}
        />

        {/* Floating chips */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingChips.map((chip) => (
            <div
              key={chip.label}
              className="absolute bottom-20 font-mono text-[11px] px-2.5 py-1 rounded-full border"
              style={{
                left: chip.x,
                color: "rgba(148,163,184,0.7)",
                borderColor: "rgba(148,163,184,0.15)",
                background: "rgba(255,255,255,0.04)",
                animationName: "chip-float",
                animationDelay: chip.delay,
                animationDuration: chip.duration,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
              }}
            >
              {chip.label}
            </div>
          ))}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-center">

        {/* Left */}
        <div>
          <p
            className="font-mono text-[12px] text-primary uppercase tracking-[0.18em] mb-5 hero-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Growth Infrastructure
          </p>
          <h1
            className="text-3xl sm:text-5xl lg:text-[72px] xl:text-[80px] leading-[1.1] sm:leading-[1.05] text-foreground mb-6 hero-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            Growth Engine for{" "}
            <span className="gradient-text">Businesses,</span>
            {" "}Careers &{" "}
            <span className="gradient-text">Kids.</span>
          </h1>
          <p
            className="font-sans text-sm sm:text-lg text-muted-foreground max-w-xl mb-8 sm:mb-10 leading-relaxed hero-fade-up"
            style={{ animationDelay: "700ms" }}
          >
            Helping businesses scale with digital and TechGlobal (IT Services), guiding students into tech careers through industry training, and inspiring kids with future-ready technology education.
          </p>
          <div
            className="flex flex-wrap items-center gap-3 sm:gap-4 hero-fade-up"
            style={{ animationDelay: "900ms" }}
          >
            <a
              href="#contact"
              className="font-sans text-sm font-semibold bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-primary/20"
            >
              Get Free Consultation
            </a>
            {/*  <a
              href="#verticals"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              Explore Verticals
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a> */}
          </div>

          {/* Quick stats row */}
          <div
            className="mt-12 flex flex-wrap gap-6 hero-fade-up"
            style={{ animationDelay: "1100ms" }}
          >
            {[
              { val: "10+", label: "Businesses" },
              { val: "1K+", label: "Learners" },
              { val: "83%", label: "Placement Rate" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-sans font-bold text-xl text-foreground">{s.val}</p>
                <p className="font-sans text-xs text-muted-foreground mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — vertical accordion panels (desktop only) */}
        <div className="hidden lg:flex flex-col h-[480px] gap-1">
          {verticals.map((v, i) => {
            const isHovered = hoveredIdx === i;
            const hasHover = hoveredIdx !== null;
            const height = hasHover ? (isHovered ? "55%" : "15%") : "25%";

            return (
              <a
                key={v.name}
                href={v.href}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="glass-card px-5 flex flex-col justify-center overflow-hidden cursor-pointer rounded-lg"
                style={{
                  height,
                  borderLeftWidth: "3px",
                  borderLeftColor: v.color,
                  borderTopColor: "rgba(255,255,255,0.06)",
                  borderRightColor: "rgba(255,255,255,0.06)",
                  borderBottomColor: "rgba(255,255,255,0.06)",
                  transition: "height 400ms cubic-bezier(0.4, 0, 0.2, 1), background 300ms ease",
                  background: isHovered ? v.glow : "rgba(255,255,255,0.03)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: v.color }}
                  />
                  <p className="font-sans font-semibold text-sm text-foreground">{v.name}</p>
                </div>
                {isHovered && (
                  <div className="mt-3 space-y-2.5" style={{ animation: "hero-fade-up 200ms ease-out forwards" }}>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed">{v.tagline}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {v.chips.map((c) => (
                        <span
                          key={c}
                          className="font-mono text-[10px] px-2 py-0.5 rounded border text-muted-foreground"
                          style={{ borderColor: `${v.color}40`, background: `${v.color}10` }}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                    <span
                      className="font-sans text-xs font-medium hover:underline inline-block"
                      style={{ color: v.color }}
                    >
                      View Details →
                    </span>
                  </div>
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile verticals — 2×2 grid */}
        <div className="lg:hidden grid grid-cols-2 gap-3">
          {verticals.map((v) => (
            <a
              key={v.name}
              href={v.href}
              target="_blank"
              rel="noreferrer"
              className="glass-card p-4 rounded-lg block"
              style={{ borderLeftWidth: "3px", borderLeftColor: v.color }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: v.color }} />
                <p className="font-sans font-semibold text-sm text-foreground">{v.name}</p>
              </div>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">{v.tagline}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
