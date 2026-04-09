import { X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const messages = [
  "Limited slots this month for consultation and partnerships.",
  "Get a free strategy call to map your growth roadmap.",
  "Priority support for Businesses, Careers & Kids verticals.",
];

export default function TopAnnouncementBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!visible) return;
    try {
      window.dispatchEvent(new CustomEvent("dq:announcementVisible"));
    } catch {
      // no-op
    }
  }, [visible]);

  const dismiss = () => {
    setVisible(false);
    try {
      window.dispatchEvent(new CustomEvent("dq:announcementDismissed"));
    } catch {
      // best-effort
    }
  };

  if (!visible) return null;

  return (
    <div className="border-b border-border bg-secondary/60 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center gap-3 py-2 text-xs sm:text-sm overflow-hidden">
        <div className="flex items-center gap-2 text-primary shrink-0">
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary/10">
            <Zap size={12} />
          </span>
          <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-widest">
            Limited
          </span>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="dq-marquee-track">
            {messages.concat(messages).map((msg, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 mx-6 text-muted-foreground whitespace-nowrap"
              >
                <span className="w-1 h-1 rounded-full bg-primary/70" />
                <span className="font-sans leading-snug">{msg}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 pl-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3 py-1 text-[11px] font-semibold hover:opacity-90 transition"
          >
            Book Free Strategy Call
          </a>
          <button
            onClick={dismiss}
            className="w-6 h-6 inline-flex items-center justify-center rounded-full text-muted-foreground hover:bg-muted/60 hover:text-foreground transition"
            aria-label="Dismiss announcement"
          >
            <X size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
