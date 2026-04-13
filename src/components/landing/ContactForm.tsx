import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useToast } from "@/hooks/use-toast";

const verticalOptions = ["Digital", "EduTech", "IT Services", "K12 (juniors)"];

export default function ContactForm() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    businessName: "",
    message: "",
    vertical: "",
  });
  const sectionRef = useScrollAnimation();
  const GOOGLE_FORM_URL = "https://forms.gle/eKxZZSUHnsXa8dvA7";

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  const handleFinalSubmit = () => {
    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.email.trim() ||
      !form.businessName.trim() ||
      !form.message.trim() ||
      !form.vertical
    ) {
      toast({
        title: "Submission failed",
        description: "Please fill all required fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Details captured",
      description: "Thanks. Please complete the final Google Form submission if needed.",
    });

    setForm({
      name: "",
      phone: "",
      email: "",
      businessName: "",
      message: "",
      vertical: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-20 scroll-mt-32 md:scroll-mt-40"
    >
      <div className="section-animate max-w-[560px] mx-auto px-4 sm:px-6" ref={sectionRef}>
        <h2 className="text-3xl md:text-[48px] md:leading-[1.15] text-foreground mb-3 text-center stagger-child">
          Let&apos;s keep it simple.
        </h2>
        <p className="font-sans text-muted-foreground text-center mb-10 stagger-child leading-relaxed">
          Share the essentials and our team will connect with the right vertical.
        </p>

        <div className="glass-card rounded-2xl border border-white/10 p-5 sm:p-7 space-y-4 stagger-child">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                Phone *
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <div>
              <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60 mb-1 block">
                Business Name *
              </label>
              <input
                type="text"
                placeholder="Your company or institution"
                value={form.businessName}
                onChange={(e) => update("businessName", e.target.value)}
                className="w-full font-sans text-sm border rounded-lg px-4 py-3 bg-surface text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                style={{ borderColor: "hsl(var(--border))" }}
              />
            </div>
          </div>

          <div>
            <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60 mb-1 block">
              Vertical *
            </label>
            <select
              value={form.vertical}
              onChange={(e) => update("vertical", e.target.value)}
              className="w-full font-sans text-sm border rounded-lg px-4 py-3 bg-surface text-foreground focus:outline-none focus:border-primary transition-colors"
              style={{ borderColor: "hsl(var(--border))" }}
            >
              <option value="">Select vertical</option>
              {verticalOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60 mb-2 block">
              Message *
            </label>
            <textarea
              placeholder="Tell us what you need help with."
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              rows={5}
              className="w-full font-sans text-sm border rounded-lg px-4 py-3 bg-surface text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
              style={{ borderColor: "hsl(var(--border))" }}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleFinalSubmit}
              className="flex-1 font-sans text-sm font-semibold bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-40"
            >
              Send Details
            </button>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 font-sans text-sm font-semibold border rounded-lg px-6 py-3 text-center text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
              style={{ borderColor: "hsl(var(--border))" }}
            >
              Open Google Form
            </a>
          </div>
        </div>

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
