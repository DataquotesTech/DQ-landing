import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const personas = [
  "Startup", "SME", "Enterprise", "College Student",
  "Working Professional", "School", "Institute",
];

export default function WhoThisIsFor() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="about" className="py-12 md:py-20">
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

        {/* vision and mission ki code chei sample code */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 stagger-child">
          <div className="p-6 rounded-lg border border-border bg-muted/50">
            <h3 className="text-xl font-semibold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground">
              To become a trusted ecosystem that bridges education, technology, and industry—empowering students, professionals, and businesses to grow through practical skills, digital transformation, and innovation.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-border bg-muted/50">
            <h3 className="text-xl font-semibold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground">Deliver exceptional value by combining technology, creativity, and human-centered design.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
