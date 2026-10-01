import { useEffect } from "react";
import { useAppContext } from "./AppContext";

export function useSectionObserver(
  sectionId: string,
  ref: React.RefObject<HTMLElement | null>,
) {
  const { setActiveSection } = useAppContext();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        });
      },
      { threshold: 0.5 }, // Triggers when 50% of the section is visible
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [sectionId, ref, setActiveSection]);
}
