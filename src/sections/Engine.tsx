import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Engine() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
        },
      },
    );
  }, []);

  return (
    <section
      id="engineering"
      ref={sectionRef}
      className="relative w-full py-32 px-6 md:px-12 min-h-[80vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16">
        <div ref={textRef} className="space-y-8">
          <div>
            <div className="font-tech text-mustang-red tracking-widest text-sm mb-4">
              01 // ENGINEERING
            </div>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tighter">
              THE HEART OF
              <br />
              THE MACHINE.
            </h2>
          </div>

          <p className="font-sans text-white/70 max-w-md leading-relaxed">
            Precision-engineered 5.0L V8 architecture. Dual air intake pathways
            maximize airflow, delivering raw, unadulterated power directly to
            the asphalt. Thermal management systems keep the core optimized
            under extreme stress.
          </p>

          <div className="space-y-6 pt-8 border-t border-white/10">
            {[
              { label: "ARCHITECTURE", value: "NATURALLY ASPIRATED V8" },
              { label: "AIR INTAKE", value: "DUAL THROTTLE BODY" },
              { label: "THERMAL", value: "ADVANCED LIQUID COOLING" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="font-tech tracking-widest text-xs text-white/50">
                  {item.label}
                </span>
                <span className="font-tech tracking-wider text-sm font-bold">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* The right side is intentionally left blank for the 3D canvas to show through (the engine area) */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
}
