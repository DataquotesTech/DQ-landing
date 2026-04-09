import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    persona: "Business Owner",
    before: "12", after: "340", metric: "Monthly Leads",
    color: "#3b82f6",
    quote: "DataQuotes transformed our entire digital strategy. We went from inconsistent results to a predictable pipeline within 90 days.",
    name: "Arjun Mehta", title: "CEO", company: "ScaleForce Solutions",
  },
  {
    persona: "Student",
    before: "0", after: "3", metric: "Job Offers",
    color: "#10b981",
    quote: "The live project experience and placement support gave me an edge that no classroom could. I had three offers before graduation.",
    name: "Priya Sharma", title: "Full-Stack Developer", company: "TechNova",
  },
  {
    persona: "School Principal",
    before: "0", after: "8", metric: "Coding Programs",
    color: "#f59e0b",
    quote: "Our students now have structured coding education integrated into the curriculum. The teacher training ensured sustainability.",
    name: "Dr. Kavitha Rao", title: "Principal", company: "Meridian International School",
  },
  {
    persona: "CTO",
    before: "6mo", after: "6wk", metric: "Delivery Time",
    color: "#818cf8",
    quote: "They understood our tech debt, proposed a clean architecture, and delivered a production-ready platform in six weeks flat.",
    name: "Vikram Joshi", title: "CTO", company: "UrbanStack",
  },
  {
    persona: "Marketing Head",
    before: "2%", after: "11%", metric: "Conversion Rate",
    color: "#3b82f6",
    quote: "Our conversion rate jumped from 2% to 11% with their data-driven approach. The ROI spoke for itself within the first month.",
    name: "Neha Kapoor", title: "VP Marketing", company: "GreenLeaf Organics",
  },
  {
    persona: "Institute Director",
    before: "40%", after: "95%", metric: "Placement Rate",
    color: "#10b981",
    quote: "Partnering with DataQuotes elevated our placement rates dramatically. Students are now industry-ready from day one.",
    name: "Prof. Rajesh Kumar", title: "Director", company: "TechBridge Academy",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useScrollAnimation();

  // Responsive cards per page: 1 mobile, 2 tablet, 3 desktop
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCardsPerPage(1);
      else if (window.innerWidth < 1024) setCardsPerPage(2);
      else setCardsPerPage(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / cardsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Clamp slide index when cardsPerPage changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [cardsPerPage]);

  const visibleTestimonials = testimonials.slice(
    currentSlide * cardsPerPage,
    currentSlide * cardsPerPage + cardsPerPage
  );

  return (
    <section className="py-20 md:py-[120px]">
      <div className="section-animate max-w-[1400px] mx-auto px-4 sm:px-6" ref={sectionRef}>
        <h2 className="text-3xl md:text-[48px] md:leading-[1.15] text-foreground mb-4 stagger-child">
          What our partners say.
        </h2>
        <p className="font-sans text-muted-foreground mb-10 md:mb-16 stagger-child">
          Real results. Real people.
        </p>

        <div
          className="grid gap-4 stagger-child"
          style={{ gridTemplateColumns: `repeat(${cardsPerPage}, 1fr)` }}
        >
          {visibleTestimonials.map((t, i) => (
            <div
              key={`${currentSlide}-${i}`}
              className="glass-card rounded-xl p-5 sm:p-6 hero-fade-up flex flex-col"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span
                className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full self-start"
                style={{ color: t.color, background: `${t.color}15` }}
              >
                {t.persona}
              </span>

              {/* Before → After metric */}
              <div className="flex items-baseline gap-2 mt-4 mb-3">
                <span className="font-sans font-bold text-2xl" style={{ color: t.color }}>
                  {t.before} → {t.after}
                </span>
                <span className="font-sans text-xs text-muted-foreground">{t.metric}</span>
              </div>

              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                "{t.quote}"
              </p>

              <div className="border-t pt-4" style={{ borderColor: "hsl(var(--border))" }}>
                <p className="font-sans text-sm font-semibold text-foreground">{t.name}</p>
                <p className="font-sans text-xs text-muted-foreground">
                  {t.title}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2 mt-8 stagger-child">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: currentSlide === i ? "24px" : "8px",
                height: "8px",
                background: currentSlide === i ? "hsl(var(--primary))" : "hsl(var(--border))",
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
