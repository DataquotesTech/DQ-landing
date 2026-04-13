import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
/* import TopAnnouncementBar from "./TopAnnouncementBar"; */

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.2, rootMargin: "-80px 0px -50% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed left-0 right-0 z-50">
      {/* <TopAnnouncementBar /> */}
      <nav
        className={`${scrolled ? "navbar-solid" : "navbar-transparent"}`}
        style={{ marginTop: 0 }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#home");
          }}
          className="font-sans font-bold text-xl tracking-tight text-foreground"
        >
          Data<span className="text-primary">Quotes</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={`relative font-sans text-sm transition-colors pb-1 ${
                activeSection === item.href.slice(1)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full transition-all" />
              )}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleClick("#contact")}
            className="font-sans text-sm font-semibold bg-primary text-primary-foreground px-5 py-2 rounded-lg hover:opacity-90 hover:scale-105 transition-all duration-200"
          >
            Talk to Expert
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-foreground p-1 rounded-md hover:bg-muted/60 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t px-4 py-4 space-y-1"
          style={{
            background: "hsla(0, 0%, 100%, 0.98)",
            borderColor: "hsl(var(--border))",
            backdropFilter: "blur(20px)",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={`block w-full text-left font-sans text-sm py-3 px-3 rounded-lg transition-colors ${
                activeSection === item.href.slice(1)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#contact")}
            className="w-full font-sans text-sm font-semibold bg-primary text-primary-foreground px-5 py-3 rounded-lg mt-2 hover:opacity-90 transition-all"
          >
            Talk to Expert
          </button>
        </div>
      )}
      </nav>
    </header>
  );
}
