import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Aerodynamics() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Animate airflow paths
    const paths = containerRef.current.querySelectorAll("path");
    paths.forEach((path, i) => {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2 + i * 0.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <section
      id="aerodynamics"
      ref={containerRef}
      className="relative w-full h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
        {/* Airflow SVG visualization */}
        <svg
          className="w-full h-full max-w-7xl opacity-50"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 200 Q 300 200, 400 150 T 800 180 T 1000 150"
            fill="none"
            stroke="#E10600"
            strokeWidth="2"
          />
          <path
            d="M 0 220 Q 300 220, 400 180 T 800 200 T 1000 180"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            opacity="0.5"
          />
          <path
            d="M 0 250 Q 300 250, 400 280 T 800 250 T 1000 220"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20 flex justify-end">
        <div className="w-full md:w-1/2 glass-panel p-8 md:p-12 rounded-xl backdrop-blur-xl">
          <div className="font-tech text-mustang-red tracking-widest text-sm mb-4">
            03 // AERODYNAMICS
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tighter mb-6">
            SCULPTED BY
            <br />
            THE WIND.
          </h2>
          <p className="font-sans text-white/70 leading-relaxed mb-8">
            Every curve and intake serves a purpose. High-performance downforce
            keeps the chassis planted at extreme speeds, while targeted airflow
            cools the braking system and thermal core.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="font-tech text-[10px] text-white/50 tracking-widest">
                DRAG COEFFICIENT
              </div>
              <div className="font-display text-2xl">0.32</div>
            </div>
            <div>
              <div className="font-tech text-[10px] text-white/50 tracking-widest">
                DOWNFORCE
              </div>
              <div className="font-display text-2xl">OPTIMIZED</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
