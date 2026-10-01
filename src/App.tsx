import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/ui/Navbar";
import Cursor from "./components/ui/Cursor";
import HeroScene from "./components/3d/HeroScene";
import { AppProvider } from "./utils/AppContext";

// Sections
import Hero from "./sections/Hero";
import Engine from "./sections/Engine";
import Performance from "./sections/Performance";
import Aerodynamics from "./sections/Aerodynamics";
import Cockpit from "./sections/Cockpit";
import Technology from "./sections/Technology";
import Gallery from "./sections/Gallery";
import ConfiguratorSection from "./sections/ConfiguratorSection";

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!prefersReducedMotion) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  return (
    <AppProvider>
      <Cursor />
      <Navbar />

      {/* 3D Global Layer */}
      <div className="fixed inset-0 z-0">
        <HeroScene />
      </div>

      {/* Scrollable Content */}
      <main className="relative z-10 pointer-events-none">
        {/* Sections should enable pointer events selectively */}
        <Hero />

        <div className="pointer-events-auto">
          <Engine />
          <Performance />
          <Aerodynamics />
          <Cockpit />
          <Technology />
          <Gallery />
          <ConfiguratorSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-mustang-dark py-24 border-t border-white/10 pointer-events-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-widest mb-8">
            THE ROAD
            <br />
            IS YOURS<span className="text-mustang-red">.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <button
              className="px-8 py-4 bg-white text-mustang-dark font-tech font-bold text-sm tracking-widest hover:bg-gray-200 transition-colors"
              data-hoverable
            >
              EXPLORE PERFORMANCE
            </button>
            <button
              className="px-8 py-4 border border-white/30 text-white font-tech font-bold text-sm tracking-widest hover:bg-white/10 transition-colors"
              data-hoverable
            >
              CONFIGURE YOUR MUSTANG
            </button>
          </div>
          <div className="flex space-x-6 font-tech text-xs text-white/50 tracking-widest">
            <a
              href="#"
              className="hover:text-white transition-colors"
              data-hoverable
            >
              PRIVACY
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              data-hoverable
            >
              LEGAL
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              data-hoverable
            >
              CREDITS
            </a>
          </div>
          <p className="mt-8 font-tech text-[10px] text-white/30 max-w-xl">
            MUSTANG // NEXUS IS A CONCEPTUAL DIGITAL EXPERIENCE. NOT AN OFFICIAL
            FORD PRODUCT. SPECIFICATIONS ARE DEMONSTRATIVE.
          </p>
        </div>
      </footer>
    </AppProvider>
  );
}

export default App;
