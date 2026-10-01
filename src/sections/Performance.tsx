import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Performance() {
  const sectionRef = useRef<HTMLElement>(null);

  const hpRef = useRef<HTMLSpanElement>(null);
  const torqueRef = useRef<HTMLSpanElement>(null);
  const speedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const animateNumber = (
      ref: React.RefObject<HTMLSpanElement | null>,
      endValue: number,
      suffix: string = "",
    ) => {
      gsap.to(ref.current, {
        innerHTML: endValue,
        duration: 2,
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        onUpdate: function () {
          if (ref.current) {
            ref.current.innerHTML =
              Math.round(Number(this.targets()[0].innerHTML)) + suffix;
          }
        },
      });
    };

    if (hpRef.current) animateNumber(hpRef, 486);
    if (torqueRef.current) animateNumber(torqueRef, 418);
    // Speed is special since it has a decimal initially we just want to animate to 4.2

    gsap.to(speedRef.current, {
      innerHTML: 4.2,
      duration: 2,
      snap: { innerHTML: 0.1 },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      onUpdate: function () {
        if (speedRef.current) {
          speedRef.current.innerHTML =
            Number(this.targets()[0].innerHTML).toFixed(1) + "s";
        }
      },
    });
  }, []);

  return (
    <section
      id="performance"
      ref={sectionRef}
      className="relative w-full py-32 bg-mustang-dark flex items-center min-h-screen"
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-mustang-red to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="text-center mb-24">
          <div className="font-tech text-mustang-red tracking-widest text-sm mb-4">
            02 // PERFORMANCE
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tighter">
            RAW NUMBERS.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="flex flex-col items-center text-center">
            <span
              ref={hpRef}
              className="font-display text-7xl md:text-8xl font-bold tracking-tighter"
            >
              0
            </span>
            <span className="font-tech text-sm text-white/50 tracking-widest mt-4">
              HORSEPOWER
            </span>
            <div className="w-full h-px bg-white/10 mt-8 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-mustang-red"></div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <span
              ref={torqueRef}
              className="font-display text-7xl md:text-8xl font-bold tracking-tighter"
            >
              0
            </span>
            <span className="font-tech text-sm text-white/50 tracking-widest mt-4">
              LB-FT TORQUE
            </span>
            <div className="w-full h-px bg-white/10 mt-8 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-mustang-red"></div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <span
              ref={speedRef}
              className="font-display text-7xl md:text-8xl font-bold tracking-tighter"
            >
              0.0s
            </span>
            <span className="font-tech text-sm text-white/50 tracking-widest mt-4">
              0-60 MPH
            </span>
            <div className="w-full h-px bg-white/10 mt-8 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-mustang-red"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
