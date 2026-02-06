"use client";
import { useReveal } from "./useReveal";

export default function SectionLabel({ text }: { text: string }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`flex items-center gap-5 mb-14 transition-all duration-[900ms] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
      }`}
    >
      <div className="w-8 h-px bg-gold" />
      <span className="text-[11px] tracking-[4px] uppercase text-gold font-medium">
        {text}
      </span>
    </div>
  );
}
