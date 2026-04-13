import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useToast } from "@/hooks/use-toast";

const verticalOptions = ["Digital", "EduTech", "IT Services", "K12 (juniors)"];

const GOOGLE_FORM_ACTION_URL = import.meta.env.VITE_GOOGLE_FORM_ACTION_URL?.trim() || "";
const GOOGLE_FORM_VERTICAL_FALLBACK = import.meta.env.VITE_GOOGLE_FORM_VERTICAL_FALLBACK?.trim() || "IT";
const GOOGLE_FORM_PUBLIC_URL = import.meta.env.VITE_GOOGLE_FORM_PUBLIC_URL?.trim() || "https://forms.gle/eKxZZSUHnsXa8dvA7";

const GOOGLE_FORM_FIELDS = {
  name: import.meta.env.VITE_GOOGLE_FORM_ENTRY_NAME?.trim() || "",
  phone: import.meta.env.VITE_GOOGLE_FORM_ENTRY_PHONE?.trim() || "",
  email: import.meta.env.VITE_GOOGLE_FORM_ENTRY_EMAIL?.trim() || "",
  businessName: import.meta.env.VITE_GOOGLE_FORM_ENTRY_BUSINESS?.trim() || "",
  message: import.meta.env.VITE_GOOGLE_FORM_ENTRY_MESSAGE?.trim() || "",
  vertical: import.meta.env.VITE_GOOGLE_FORM_ENTRY_VERTICAL?.trim() || "",
};

const normalizeVerticalValue = (value: string) => {
  const normalized = value.trim().toLowerCase();

  if (!normalized || normalized === "general" || normalized === "business") return "IT";
  if (normalized === "techglobal" || normalized === "it" || normalized === "it services") return "IT";
  if (normalized === "k12" || normalized === "k12 (juniors)" || normalized === "juniors") return "juniors";
  if (normalized === "edutech") return "edutech";
  if (normalized === "digital marketing" || normalized === "digital marketing") return "digital marketing";
  if (normalized === "landing") return "landing";

  return "IT";
};

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const sectionRef = useScrollAnimation();

  const update = (field: string, value: string) => {
    if (submitError) {
      setSubmitError("");
    }
    setForm({ ...form, [field]: value });
  };

  const buildGoogleFormPayload = () => {
    const payload = new URLSearchParams();
    const normalizedVertical = normalizeVerticalValue(
      form.vertical || GOOGLE_FORM_VERTICAL_FALLBACK
    );

    if (GOOGLE_FORM_FIELDS.name) payload.append(GOOGLE_FORM_FIELDS.name, form.name.trim());
    if (GOOGLE_FORM_FIELDS.phone) payload.append(GOOGLE_FORM_FIELDS.phone, form.phone.trim());
    if (GOOGLE_FORM_FIELDS.email) payload.append(GOOGLE_FORM_FIELDS.email, form.email.trim());
    if (GOOGLE_FORM_FIELDS.businessName) payload.append(GOOGLE_FORM_FIELDS.businessName, form.businessName.trim());
    if (GOOGLE_FORM_FIELDS.message) payload.append(GOOGLE_FORM_FIELDS.message, form.message.trim());
    if (GOOGLE_FORM_FIELDS.vertical) payload.append(GOOGLE_FORM_FIELDS.vertical, normalizedVertical);

    return payload;
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.email.trim() ||
      !form.businessName.trim() ||
      !form.message.trim() ||
      !form.vertical
    ) {
      setSubmitError("Please fill all required fields before submitting.");
      toast({
        title: "Submission failed",
        description: "Please fill all required fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    if (!GOOGLE_FORM_ACTION_URL) {
      setSubmitError("Google Form is not configured yet. Please use direct form link.");
      toast({
        title: "Form config missing",
        description: "Use the direct Google Form link below.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError("");

      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: buildGoogleFormPayload().toString(),
      });

      toast({
        title: "Submitted successfully",
        description: "Our team will contact you shortly.",
      });

      setForm({
        name: "",
        phone: "",
        email: "",
        businessName: "",
        message: "",
        vertical: "",
      });
    } catch {
      setSubmitError("Submission failed. Please try again or use Google Form link.");
      toast({
        title: "Submission failed",
        description: "Please retry or use the Google Form link.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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

        <form onSubmit={handleFinalSubmit} className="glass-card rounded-2xl border border-white/10 p-5 sm:p-7 space-y-4 stagger-child">
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
              type="submit"
              disabled={isSubmitting}
              className="flex-1 font-sans text-sm font-semibold bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-40"
            >
              {isSubmitting ? "Submitting..." : "Send Details"}
            </button>
            <a
              href={GOOGLE_FORM_PUBLIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 font-sans text-sm font-semibold border rounded-lg px-6 py-3 text-center text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
              style={{ borderColor: "hsl(var(--border))" }}
            >
              Open Google Form
            </a>
          </div>
          {submitError && <p className="font-sans text-xs text-red-400">{submitError}</p>}
        </form>

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
