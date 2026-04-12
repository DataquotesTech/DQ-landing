import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tabs = [
  {
    name: "Digital",
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.12)",
    offerings: ["SEO Optimization", "Social Media Ads", "Email Marketing", "Content Strategy", "Lead Funnels", "Analytics & Reporting"],
    deliverables: ["Comprehensive digital audit", "Campaign strategy document", "Monthly performance reports", "Optimized landing pages", "Automated email sequences"],
    phases: ["Audit", "Strategy", "Launch", "Optimize", "Scale"],
    stats: [
      { value: "3.5×", label: "Avg ROI" },
      { value: "45%", label: "Cost Reduction" },
      { value: "200%", label: "Lead Increase" },
    ],
  },
  {
    name: "Edutech",
    color: "#10b981",
    glow: "rgba(16,185,129,0.12)",
    offerings: ["Industry Certifications", "Live Projects", "Mock Interviews", "Resume Building", "Career Counseling", "Corporate Tie-ups"],
    deliverables: ["Skill assessment report", "Personalized learning path", "Project portfolio", "Placement preparation kit", "Interview coaching sessions"],
    phases: ["Assess", "Train", "Build", "Prepare", "Place"],
    stats: [
      { value: "95%", label: "Placement Rate" },
      { value: "10K+", label: "Students Trained" },
      { value: "120+", label: "Hiring Partners" },
    ],
  },
  {
    name: "IT Services",
    color: "#818cf8",
    glow: "rgba(129,140,248,0.12)",
    offerings: ["Web Development", "Mobile Apps", "System Integration", "Cloud Migration", "Tech Audits", "DevOps Setup"],
    deliverables: ["Technical architecture document", "MVP or prototype", "Full production build", "QA & testing report", "Deployment & documentation"],
    phases: ["Discovery", "Architecture", "Development", "Testing", "Deployment"],
    stats: [
      { value: "200+", label: "Projects Delivered" },
      { value: "48hrs", label: "Avg. Kickoff" },
      { value: "99.9%", label: "Uptime SLA" },
    ],
  },
  {
    name: "K12 (juniors)",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.12)",
    offerings: ["Scratch Programming", "Python Basics", "Web Development", "Robotics", "App Development", "Teacher Training"],
    deliverables: ["Curriculum mapping to school board", "Student progress dashboard", "End-of-term showcase project", "Teacher certification", "Parent progress reports"],
    phases: ["Curriculum Map", "Onboard", "Teach", "Showcase", "Certify"],
    stats: [
      { value: "50+", label: "Schools" },
      { value: "5K+", label: "Kids Trained" },
      { value: "12+", label: "Curricula" },
    ],
  },
];

export default function ServicesDeepDive() {
  const [activeTab, setActiveTab] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const sectionRef = useScrollAnimation();
  const tab = tabs[activeTab];

  const switchTab = (i: number) => {
    setFadeKey((k) => k + 1);
    setActiveTab(i);
  };

  return (
    <section className="py-20 md:py-[120px]">
      <div className="section-animate max-w-[1400px] mx-auto px-4 sm:px-6" ref={sectionRef}>
        <h2 className="text-3xl md:text-[48px] md:leading-[1.15] text-foreground mb-4 stagger-child">
          Deep dive into our verticals.
        </h2>
        <p className="font-sans text-muted-foreground mb-10 md:mb-16 stagger-child">
          Explore what each service delivers — from offerings to outcomes.
        </p>

        <div className="stagger-child">
          {/* Tab bar — horizontal scroll on mobile */}
          <div className="flex overflow-x-auto gap-1 mb-8 pb-1 -mx-2 px-2 scrollbar-none">
            {tabs.map((t, i) => (
              <button
                key={t.name}
                onClick={() => switchTab(i)}
                className="flex-shrink-0 px-4 py-2.5 rounded-lg font-sans text-sm font-medium transition-all duration-200 whitespace-nowrap"
                style={{
                  color: activeTab === i ? t.color : "hsl(var(--muted-foreground))",
                  background: activeTab === i ? `${t.color}15` : "transparent",
                  borderBottom: `2px solid ${activeTab === i ? t.color : "transparent"}`,
                }}
              >
                {t.name}
              </button>
            ))}
          </div>

          {/* Content area */}
          <div
            key={fadeKey}
            className="hero-fade-up grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ animationDuration: "200ms" }}
          >
            {/* Offerings */}
            <div className="glass-card rounded-xl p-5">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60 mb-4">
                Offerings
              </p>
              <div className="flex flex-wrap gap-2">
                {tab.offerings.map((o) => (
                  <span
                    key={o}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-md border text-foreground/80"
                    style={{ borderColor: `${tab.color}40`, background: `${tab.color}10` }}
                  >
                    {o}
                  </span>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="glass-card rounded-xl p-5">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60 mb-4">
                Deliverables
              </p>
              <ol className="space-y-2.5">
                {tab.deliverables.map((d, i) => (
                  <li key={d} className="font-sans text-sm text-muted-foreground flex gap-3 items-start">
                    <span
                      className="font-mono text-[11px] pt-0.5 shrink-0 font-semibold"
                      style={{ color: tab.color }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {d}
                  </li>
                ))}
              </ol>
            </div>

            {/* Process + Stats */}
            <div className="space-y-4 md:col-span-2 lg:col-span-1">
              {/* Process */}
              <div className="glass-card rounded-xl p-5">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60 mb-4">
                  Process
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {tab.phases.map((phase, i) => (
                    <div key={phase} className="flex items-center gap-2">
                      <div className="text-center">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center font-mono text-[10px] font-semibold border text-xs"
                          style={{ borderColor: tab.color, color: tab.color, background: `${tab.color}15` }}
                        >
                          {i + 1}
                        </div>
                        <p className="font-sans text-[10px] text-muted-foreground mt-1 whitespace-nowrap">{phase}</p>
                      </div>
                      {i < tab.phases.length - 1 && (
                        <div className="w-4 h-px mb-4" style={{ background: `${tab.color}50` }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="glass-card rounded-xl p-5">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60 mb-4">
                  Key Results
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {tab.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="font-sans font-bold text-lg" style={{ color: tab.color }}>{s.value}</p>
                      <p className="font-sans text-[10px] text-muted-foreground mt-0.5 leading-tight">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
