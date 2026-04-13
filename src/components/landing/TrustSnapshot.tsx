import { useCountUp } from "@/hooks/useCountUp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: 10, suffix: "+", label: "Businesses Scaled" },
  { value: 1000, suffix: "+", label: "Learners Trained" },
  { value: 83, suffix: "%", label: "Placement Rate" },
  { value: 72, suffix: "hrs", label: "Delivery Start" },
  { value: 3, suffix: "+", label: "Partner Institutes" },
  { value: 10, suffix: "+", label: "Projects Delivered" },
];

const partners = [
  "SMPR Realty", "Royal Furn", "FMCG Influencers", "Sri Maruthi Hospitals", "Mithra Clinic",
  "Naveen Dentals", "Santosh Academy", "MateriGO", "BloomBites", "Insentisights",
];

function StatBlock({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, display } = useCountUp(value, 1500, suffix);
  return (
    <div ref={ref} className="flex-1 text-center py-6 sm:py-8 min-w-[130px] px-2">
      <p className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-foreground">{display}</p>
      <p className="font-sans text-xs sm:text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

export default function TrustSnapshot() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="bg-surface py-16 md:py-[100px]">
      <div className="section-animate max-w-[1400px] mx-auto px-4 sm:px-6" ref={sectionRef}>
        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 divide-border sm:divide-x sm:divide-border rounded-2xl glass-card overflow-hidden">
          {stats.map((s) => (
            <StatBlock key={s.label} {...s} />
          ))}
        </div>

        {/* Partner logo scroll */}
        <div className="mt-12 md:mt-16 overflow-hidden relative">
          {/* Fade masks on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, hsl(var(--surface)), transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, hsl(var(--surface)), transparent)" }} />

          <div className="logo-scroll flex gap-12 sm:gap-16 whitespace-nowrap py-2">
            {[...partners, ...partners].map((name, i) => (
              <span
                key={i}
                className="font-sans text-base text-muted-foreground/60 hover:text-muted-foreground/90 transition-colors duration-300 select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
