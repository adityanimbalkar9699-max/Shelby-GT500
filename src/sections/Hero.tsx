import { useRef } from "react";
import { useSectionObserver } from "../utils/useSectionObserver";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionObserver("hero", sectionRef);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-screen w-full flex items-end pb-24 md:pb-32 px-6 md:px-12 pointer-events-none"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end">
        {/* Headlines */}
        <div className="pointer-events-auto">
          <h1 className="font-display font-bold text-5xl md:text-8xl tracking-tighter leading-none mb-4">
            BUILT TO
            <br />
            BE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              UNLEASHED
            </span>
            .
          </h1>
          <p className="font-tech text-mustang-red tracking-widest text-sm md:text-base">
            NEXT-GENERATION PERFORMANCE ARCHITECTURE.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              data-hoverable
              className="px-6 py-3 bg-white text-mustang-dark font-tech font-bold text-xs tracking-widest hover:bg-gray-200 transition-colors"
            >
              EXPLORE PERFORMANCE
            </button>
            <button
              data-hoverable
              className="px-6 py-3 glass-panel text-white font-tech font-bold text-xs tracking-widest hover:bg-white/10 transition-colors"
            >
              ENTER THE MACHINE
            </button>
          </div>
        </div>

        {/* HUD - Right Side */}
        <div className="hidden md:flex flex-col gap-6 text-right pointer-events-auto">
          <div className="glass-panel p-4 rounded-lg cursor-default">
            <div className="font-tech text-[10px] text-white/50 tracking-widest mb-1">
              ENGINE
            </div>
            <div className="font-display text-2xl font-bold tracking-wider">
              5.0L V8
            </div>
          </div>
          <div className="glass-panel p-4 rounded-lg cursor-default">
            <div className="font-tech text-[10px] text-white/50 tracking-widest mb-1">
              POWER
            </div>
            <div className="font-display text-2xl font-bold tracking-wider">
              486 HP
            </div>
          </div>
          <div className="glass-panel p-4 rounded-lg cursor-default">
            <div className="font-tech text-[10px] text-white/50 tracking-widest mb-1">
              ACCELERATION
            </div>
            <div className="font-display text-2xl font-bold tracking-wider">
              4.2s <span className="text-sm text-white/50">0-60</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
