import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const personas = [
  "Startup", "SME", "Enterprise", "College Student",
  "Working Professional", "School", "Institute",
];

export default function WhoThisIsFor() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-[120px]">
      <div className="section-animate max-w-[1400px] mx-auto px-4 sm:px-6" ref={sectionRef}>
        <h2 className="text-3xl md:text-[48px] md:leading-[1.15] text-foreground mb-4 stagger-child">
          Built for people who move.
        </h2>
        <p className="font-sans text-muted-foreground mb-10 stagger-child">
          Whether you're scaling a business, building a career, or shaping the next generation.
        </p>

        <div className="flex flex-wrap gap-3 stagger-child">
          {personas.map((p) => (
            <span
              key={p}
              className="font-sans text-sm px-5 py-2.5 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-200 cursor-default"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
