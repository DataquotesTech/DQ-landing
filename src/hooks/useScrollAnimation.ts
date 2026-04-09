import { useEffect, useRef } from "react";

export function useScrollAnimation(staggerDelay = 80) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Mark as not-visible initially so we can animate in
    el.classList.add("not-visible");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          const children = el.querySelectorAll(".stagger-child");
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add("visible"), i * staggerDelay);
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );

    // Small delay to ensure the not-visible class is painted first
    requestAnimationFrame(() => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [staggerDelay]);

  return ref;
}
