import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  { label: "Business Owner", icon: "🏢" },
  { label: "Student", icon: "🎓" },
  { label: "School/Institute", icon: "🏫" },
];

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    category: "",
    message: "",
  });
  const sectionRef = useScrollAnimation();

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  const canNext = () => {
    if (step === 1) return form.name.trim() && form.email.trim();
    if (step === 2) return form.category;
    return true;
  };

  const charCount = form.message.length;

  return (
    <section
      id="contact"
      className="py-20 md:py-[120px] scroll-mt-32 md:scroll-mt-40"
    >
      <div className="section-animate max-w-[560px] mx-auto px-4 sm:px-6" ref={sectionRef}>
        {/* Header */}
        <h2 className="text-3xl md:text-[48px] md:leading-[1.15] text-foreground mb-3 text-center stagger-child">
          Let's build your growth roadmap.
        </h2>
        <p className="font-sans text-muted-foreground text-center mb-10 stagger-child leading-relaxed">
          Tell us about your goal. We'll map the right path within 24 hours.
        </p>

        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-8 stagger-child">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-semibold transition-all duration-300 shrink-0"
                style={{
                  background: step >= s ? "hsl(var(--primary))" : "hsl(var(--border))",
                  color: step >= s ? "white" : "hsl(var(--muted-foreground))",
                }}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className="h-[2px] flex-1 rounded-full transition-all duration-500"
                  style={{
                    background: step > s
                      ? "hsl(var(--primary))"
                      : "hsl(var(--border))",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1 — Contact info */}
        {step === 1 && (
          <div className="space-y-3 stagger-child">
            <div>
              <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60 mb-1 block">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full font-sans text-sm border rounded-lg px-4 py-3 bg-surface text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                style={{ borderColor: "hsl(var(--border))" }}
              />
            </div>
            <div>
              <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60 mb-1 block">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="w-full font-sans text-sm border rounded-lg px-4 py-3 bg-surface text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                style={{ borderColor: "hsl(var(--border))" }}
              />
            </div>
            <div>
              <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60 mb-1 block">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full font-sans text-sm border rounded-lg px-4 py-3 bg-surface text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                style={{ borderColor: "hsl(var(--border))" }}
              />
            </div>
          </div>
        )}

        {/* Step 2 — Category */}
        {step === 2 && (
            <div className="stagger-child visible">
            <p className="font-sans text-sm text-muted-foreground mb-4 text-center">
              Who best describes you?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => update("category", cat.label)}
                  className="glass-card rounded-xl p-4 sm:p-5 text-center font-sans text-sm transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    borderColor: form.category === cat.label ? "hsl(var(--primary))" : "rgba(255,255,255,0.08)",
                    borderWidth: "1.5px",
                    background: form.category === cat.label ? "hsl(var(--primary) / 0.12)" : "rgba(255,255,255,0.03)",
                    color: form.category === cat.label ? "hsl(var(--primary))" : "hsl(var(--foreground))",
                  }}
                >
                  <span className="text-2xl mb-2 block">{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3 — Message */}
        {step === 3 && (
            <div className="stagger-child visible">
            <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60 mb-2 block">
              Describe your goal
            </label>
            <textarea
              placeholder="What are you looking to achieve? The more specific, the better we can help."
              value={form.message}
              onChange={(e) => {
                if (e.target.value.length <= 500) update("message", e.target.value);
              }}
              rows={5}
              className="w-full font-sans text-sm border rounded-lg px-4 py-3 bg-surface text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
              style={{ borderColor: "hsl(var(--border))" }}
            />
            <p className="font-mono text-[11px] text-muted-foreground/60 mt-1.5 text-right">
              {charCount}/500{" "}
              {charCount < 20 && charCount > 0 && (
                <span className="text-red-400">(min 20 chars)</span>
              )}
            </p>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-3 mt-6 stagger-child">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="font-sans text-sm border rounded-lg px-5 py-3 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
              style={{ borderColor: "hsl(var(--border))" }}
            >
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={() => canNext() && setStep(step + 1)}
              disabled={!canNext()}
              className="flex-1 font-sans text-sm font-semibold bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-40"
            >
              Continue →
            </button>
          ) : (
            <button
              disabled={charCount < 20}
              className="flex-1 font-sans text-sm font-semibold bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-40"
            >
              Start the Conversation →
            </button>
          )}
        </div>

        {/* Trust badges */}
        <div className="mt-8 text-center space-y-3 stagger-child">
          <p className="font-sans text-xs text-muted-foreground/70">
            We respond within 2 hours. No spam. No sales pressure.
          </p>
          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
            {["Verified Partners", "NDA-Friendly", "Free First Call"].map((badge) => (
              <span
                key={badge}
                className="font-mono text-[11px] text-muted-foreground/60 flex items-center gap-1"
              >
                <span className="text-primary">✓</span> {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
