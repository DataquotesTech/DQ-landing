import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X } from "lucide-react";

const cases = [
  {
    tag: "Digital Marketing", color: "#3b82f6",
    client: "D2C E-commerce Brand",
    challenge: "Spending ₹5L/month on ads with 1.2% conversion rate and no attribution clarity.",
    intervention: "Full-funnel audit, rebuilt landing pages, implemented tracking, launched retargeting.",
    result: "4.8× ROAS",
    resultDetail: "Achieved 4.8× return on ad spend within 90 days with 65% reduction in cost per acquisition.",
    fullStory: "This D2C brand was hemorrhaging ad spend across fragmented campaigns. We consolidated their channels, rebuilt conversion-optimized landing pages, implemented end-to-end attribution, and launched precision retargeting sequences. Within 90 days, ROAS jumped from 1.2× to 4.8×, and CPA dropped by 65%.",
  },
  {
    tag: "Edutech", color: "#10b981",
    client: "Engineering College (Tier 2)",
    challenge: "42% placement rate with companies offering below-market packages.",
    intervention: "Launched 6-month upskilling program with live projects and mock interviews.",
    result: "94% Placed",
    resultDetail: "94% placement rate with average package increase of 40% within one academic year.",
    fullStory: "This tier-2 engineering college struggled with low placement rates and poor industry perception. We embedded a 6-month upskilling program featuring industry certifications, live client projects, and intensive interview preparation. The result: 94% placement rate with a 40% increase in average package, plus three new corporate hiring partnerships.",
  },
  {
    tag: "IT Services", color: "#818cf8",
    client: "Healthcare Startup",
    challenge: "Legacy PHP system crashing under 10K daily users, no mobile presence.",
    intervention: "Rebuilt on React + Node.js microservices, launched React Native app.",
    result: "99.9% Uptime",
    resultDetail: "Scaled to 100K+ daily users with 99.9% uptime SLA and 2-second average load time.",
    fullStory: "This healthcare startup's legacy PHP monolith was buckling under growth. We architected a clean migration to React frontend with Node.js microservices, implemented proper CI/CD, and launched a React Native mobile app. The platform now handles 100K+ daily users with 99.9% uptime and sub-2-second load times.",
  },
];

export default function CaseStudies() {
  const [openCase, setOpenCase] = useState<number | null>(null);
  const sectionRef = useScrollAnimation();

  return (
    <section id="case-studies" className="py-20 md:py-[120px] bg-surface">
      <div className="section-animate max-w-[1400px] mx-auto px-4 sm:px-6" ref={sectionRef}>
        <h2 className="text-3xl md:text-[48px] md:leading-[1.15] text-foreground mb-4 stagger-child">
          Outcomes, not outputs.
        </h2>
        <p className="font-sans text-muted-foreground mb-10 md:mb-16 stagger-child">
          Real engagements. Measurable impact.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 stagger-child">
          {cases.map((c, i) => (
            <div
              key={c.client}
              onClick={() => setOpenCase(i)}
              className="glass-card rounded-xl p-5 sm:p-6 cursor-pointer transition-all duration-300 group hover:scale-[1.02]"
              style={{
                borderTop: `3px solid ${c.color}`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = `${c.color}08`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <span
                className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full"
                style={{ color: c.color, background: `${c.color}15` }}
              >
                {c.tag}
              </span>
              <p className="font-sans font-semibold text-sm text-foreground mt-3 mb-4">{c.client}</p>
              <div className="space-y-3 text-xs font-sans">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">Challenge</span>
                  <p className="text-muted-foreground mt-1 leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">Intervention</span>
                  <p className="text-muted-foreground mt-1 leading-relaxed">{c.intervention}</p>
                </div>
                <div className="pt-2 border-t" style={{ borderColor: "hsl(var(--border))" }}>
                  <p className="font-sans font-bold text-xl mt-2" style={{ color: c.color }}>{c.result}</p>
                  <p className="text-muted-foreground/70 text-[11px] mt-1 leading-relaxed">{c.resultDetail}</p>
                </div>
              </div>
              <p className="font-sans text-xs mt-4 font-medium" style={{ color: c.color }}>
                Read full story →
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {openCase !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
          onClick={() => setOpenCase(null)}
        >
          <div
            className="glass-card rounded-2xl max-w-lg w-full p-6 sm:p-8 relative hero-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenCase(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all"
            >
              <X size={16} />
            </button>
            <span
              className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{ color: cases[openCase].color, background: `${cases[openCase].color}15` }}
            >
              {cases[openCase].tag}
            </span>
            <h3 className="text-xl sm:text-2xl text-foreground mt-3 mb-4">{cases[openCase].client}</h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              {cases[openCase].fullStory}
            </p>
            <p className="font-sans font-bold text-2xl sm:text-3xl mt-6" style={{ color: cases[openCase].color }}>
              {cases[openCase].result}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
