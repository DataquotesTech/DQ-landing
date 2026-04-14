import { MessageCircle, Phone } from "lucide-react";

const WhatsAppFloat = () => (
  <>
    <a
      href="https://wa.me/918790134917?text=Hi%2C%20I%20want%20to%20discuss%20my%20project"
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float-btn fixed bottom-6 right-4 z-50 h-14 w-14 rounded-full bg-whatsapp flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
      style={{ boxShadow: "0 4px 20px -2px hsla(142, 70%, 49%, 0.4)" }}
    >
      <MessageCircle className="h-7 w-7 text-whatsapp-foreground" />
    </a>

    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border px-4 py-2 flex gap-2"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href="https://wa.me/918790134917?text=Hi%2C%20I%20want%20to%20discuss%20my%20project"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-whatsapp text-whatsapp-foreground font-semibold text-sm"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
      <a
        href="tel:+918790134917"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm"
      >
        <Phone className="h-4 w-4" /> Call Now
      </a>
    </div>
  </>
);

export default WhatsAppFloat;
