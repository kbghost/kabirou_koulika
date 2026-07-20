"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const supportsHover = window.matchMedia("(hover: hover)").matches;
    if (!supportsHover) return;

    const move = (e: MouseEvent) => {
      if (!visible) setVisible(true);
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      const target = e.target as HTMLElement;
      setIsPointer(Boolean(target.closest("a, button, [role='button'], input, textarea")));
    };

    const hide = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
    };
  }, [visible]);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="custom-cursor hidden sm:block"
      style={{
        opacity: visible ? 1 : 0,
        width: isPointer ? 36 : 22,
        height: isPointer ? 36 : 22,
        borderRadius: isPointer ? "50%" : "4px",
        backgroundColor: isPointer ? "rgba(76,223,232,0.15)" : "transparent",
      }}
    />
  );
}
