import { useState, useRef } from "react";
import { cn } from "../utils/cn";
import { useAppContext } from "../utils/AppContext";
import { useSectionObserver } from "../utils/useSectionObserver";

export default function ConfiguratorSection() {
  const { carColor, setCarColor } = useAppContext();
  const [wheels, setWheels] = useState("PERFORMANCE");
  const [interior, setInterior] = useState("TRACK");

  const sectionRef = useRef<HTMLElement>(null);
  useSectionObserver("configurator", sectionRef);

  const colors = [
    { name: "OBSIDIAN BLACK", value: "#0A0A0A" },
    { name: "TITANIUM WHITE", value: "#F5F5F5" },
    { name: "RAPID RED", value: "#E10600" },
    { name: "VELOCITY BLUE", value: "#0047AB" },
    { name: "LIQUID SILVER", value: "#C0C0C0" },
  ];

  return (
    <section
      id="configure"
      ref={sectionRef}
      className="relative w-full min-h-screen py-32 px-6 md:px-12 bg-mustang-dark flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 relative z-10">
        {/* Left: Configuration UI */}
        <div className="space-y-12">
          <div>
            <div className="font-tech text-mustang-red tracking-widest text-sm mb-4">
              07 // CONFIGURE
            </div>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tighter mb-4">
              BUILD YOUR
              <br />
              MACHINE.
            </h2>
          </div>

          <div className="space-y-8">
            {/* Paint Selection */}
            <div>
              <h3 className="font-tech font-bold text-xs tracking-widest text-white/50 mb-4">
                EXTERIOR PAINT
              </h3>
              <div className="flex flex-wrap gap-4">
                {colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setCarColor(c.value)}
                    data-hoverable
                    className={cn(
                      "w-12 h-12 rounded-full border-2 transition-all",
                      carColor === c.value
                        ? "border-white scale-110"
                        : "border-transparent hover:border-white/50",
                    )}
                    style={{ backgroundColor: c.value }}
                    title={c.name}
                  />
                ))}
              </div>
              <div className="mt-4 font-tech text-xs tracking-widest uppercase text-white/80">
                {colors.find((c) => c.value === carColor)?.name}
              </div>
            </div>

            {/* Wheels Selection */}
            <div>
              <h3 className="font-tech font-bold text-xs tracking-widest text-white/50 mb-4">
                WHEEL SYSTEM
              </h3>
              <div className="flex gap-4">
                {["PERFORMANCE", "CARBON", "PREMIUM"].map((w) => (
                  <button
                    key={w}
                    onClick={() => setWheels(w)}
                    data-hoverable
                    className={cn(
                      "px-4 py-2 font-tech text-xs tracking-widest border transition-colors",
                      wheels === w
                        ? "border-mustang-red text-mustang-red"
                        : "border-white/20 text-white/50 hover:border-white hover:text-white",
                    )}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

            {/* Interior Selection */}
            <div>
              <h3 className="font-tech font-bold text-xs tracking-widest text-white/50 mb-4">
                INTERIOR SPEC
              </h3>
              <div className="flex gap-4">
                {["TRACK", "LUXURY", "CRIMSON"].map((i) => (
                  <button
                    key={i}
                    onClick={() => setInterior(i)}
                    data-hoverable
                    className={cn(
                      "px-4 py-2 font-tech text-xs tracking-widest border transition-colors",
                      interior === i
                        ? "border-mustang-red text-mustang-red"
                        : "border-white/20 text-white/50 hover:border-white hover:text-white",
                    )}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Summary / CTA */}
        <div className="flex flex-col justify-end">
          <div className="glass-panel p-8 rounded-xl backdrop-blur-xl">
            <h3 className="font-tech font-bold text-lg tracking-widest mb-6 border-b border-white/10 pb-4">
              YOUR BUILD
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between font-tech text-xs tracking-widest">
                <span className="text-white/50">MODEL</span>
                <span>MUSTANG // NEXUS</span>
              </div>
              <div className="flex justify-between font-tech text-xs tracking-widest">
                <span className="text-white/50">PAINT</span>
                <span>{colors.find((c) => c.value === carColor)?.name}</span>
              </div>
              <div className="flex justify-between font-tech text-xs tracking-widest">
                <span className="text-white/50">WHEELS</span>
                <span>{wheels}</span>
              </div>
              <div className="flex justify-between font-tech text-xs tracking-widest">
                <span className="text-white/50">INTERIOR</span>
                <span>{interior}</span>
              </div>
            </div>

            <button
              data-hoverable
              className="w-full py-4 bg-mustang-red text-white font-tech font-bold text-sm tracking-widest hover:bg-red-700 transition-colors"
            >
              RESERVE NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
