import React, { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Efficient follow using rAF + transform (avoid layout thrashing)
    let rafId = null;
    const posRef = { x: 0, y: 0 };

    const handleMove = (e) => {
      posRef.x = e.clientX;
      posRef.y = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          if (cursorRef.current) {
            // Use transform to avoid layout/paint cost of left/top
            // Include translate(-50%,-50%) to keep it centered
            cursorRef.current.style.transform = `translate3d(${posRef.x}px, ${posRef.y}px, 0) translate(-50%, -50%)`;
          }
          rafId = null;
        });
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Optional: add hover detection for interactive elements
  useEffect(() => {
    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);

    // elements that should trigger hover state (links, buttons)
    const selector = "a, button, [data-cursor-hover]";
    const nodes = Array.from(document.querySelectorAll(selector));
    nodes.forEach((n) => {
      n.addEventListener("mouseenter", onEnter);
      n.addEventListener("mouseleave", onLeave);
    });

    return () => {
      nodes.forEach((n) => {
        n.removeEventListener("mouseenter", onEnter);
        n.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cursor ${hovering ? "cursor-hover" : ""}`}
      aria-hidden
    />
  );
}
