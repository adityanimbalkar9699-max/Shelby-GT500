import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollWrapperRef.current) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!prefersReducedMotion) {
      const sections = gsap.utils.toArray(".gallery-item");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + (scrollWrapperRef.current?.offsetWidth || 0),
        },
      });
    }
  }, []);

  const items = [
    { title: "AGGRESSIVE STANCE", num: "01", image: "/gallery1.jpg" },
    { title: "PRECISION OPTICS", num: "02", image: "/gallery2.jpg" },
    { title: "AERODYNAMIC PROFILE", num: "03", image: "/gallery3.jpg" },
    { title: "TRACK READY", num: "04", image: "/gallery4.jpg" },
  ];

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#0A0A0A]"
    >
      <div className="absolute top-12 left-6 md:left-12 z-20">
        <div className="font-tech text-mustang-red tracking-widest text-sm">
          06 // GALLERY
        </div>
      </div>

      <div
        ref={scrollWrapperRef}
        className="flex h-full w-[400vw] md:w-[300vw]"
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="gallery-item relative w-screen h-full flex items-center justify-center p-12 md:p-32"
          >
            <div className="w-full h-full relative overflow-hidden group rounded-2xl glass-panel bg-[#111]">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-10">
                <div className="font-tech text-mustang-red text-xs tracking-widest mb-2">
                  {item.num} / 04
                </div>
                <h3 className="font-display font-bold text-2xl md:text-4xl tracking-tighter text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
