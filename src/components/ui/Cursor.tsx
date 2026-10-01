import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { cn } from "../../utils/cn";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    // Check if it's a touch device, don't show custom cursor
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      if (isHidden) setIsHidden(false);
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        target.hasAttribute("data-hoverable")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseleave", () => setIsHidden(true));
    document.body.addEventListener("mouseenter", () => setIsHidden(false));

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isHidden]);

  if (isHidden) return null;

  return (
    <div
      ref={cursorRef}
      className={cn(
        "custom-cursor flex items-center justify-center font-tech text-[8px] uppercase tracking-wider",
        isHovering ? "hover" : "",
      )}
    >
      {isHovering && <span className="text-white opacity-80">VIEW</span>}
    </div>
  );
}
