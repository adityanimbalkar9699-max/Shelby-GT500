import { useState, useEffect } from "react";
import { cn } from "../../utils/cn";
import SoundToggle from "./SoundToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    "PERFORMANCE",
    "ENGINEERING",
    "TECHNOLOGY",
    "GALLERY",
    "CONFIGURE",
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 pointer-events-none",
        scrolled ? "py-4" : "py-8",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center pointer-events-auto">
        {/* LOGO */}
        <div
          className="font-display font-bold text-xl tracking-widest text-white cursor-pointer"
          data-hoverable
        >
          MUSTANG<span className="text-mustang-red">.</span>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex space-x-8 glass-panel px-8 py-3 rounded-full">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              data-hoverable
              className="font-tech text-xs text-white/70 hover:text-white tracking-widest transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CONTROLS */}
        <div className="hidden md:flex items-center gap-6">
          <SoundToggle />
          <button
            data-hoverable
            className="text-white font-tech text-xs tracking-widest"
          >
            MENU
          </button>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex md:hidden items-center gap-4">
          <SoundToggle />
          <button
            data-hoverable
            className="text-white font-tech text-xs tracking-widest"
          >
            MENU
          </button>
        </div>
      </div>
    </nav>
  );
}
