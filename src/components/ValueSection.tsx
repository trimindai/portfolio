"use client";
import { useRef, useCallback } from "react";
import SectionLabel from "./SectionLabel";
import { useReveal } from "./useReveal";

const values = [
  { icon: "I", title: "Regulatory-Aligned Strategy", desc: "Design marketing strategies tailored to regulated banking products and services, ensuring every initiative operates within the boundaries of Central Bank of Kuwait guidelines." },
  { icon: "II", title: "Compliance & Governance", desc: "Ensure full alignment with compliance, governance, and regulatory frameworks — turning constraints into a competitive advantage that builds lasting brand trust." },
  { icon: "III", title: "Brand Trust & Transparency", desc: "Strengthen brand credibility through transparent and responsible communication that resonates with customers and reinforces institutional integrity." },
  { icon: "IV", title: "Performance Optimization", desc: "Focus on measurable results and continuous performance optimization, refining strategies based on analytical insights to drive sustainable growth." },
];

function ValueCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.background = `radial-gradient(400px at ${x}px ${y}px, rgba(201, 168, 76, 0.03), #111d32 70%)`;
  }, []);

  const handleLeave = useCallback(() => {
    if (cardRef.current) cardRef.current.style.background = "var(--navy)";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="bg-navy p-12 md:p-[48px_40px] transition-all duration-500 relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ background: "linear-gradient(to right, transparent, var(--gold), transparent)" }} />
      <div className="font-display text-4xl text-gold mb-6 font-light italic leading-none">{icon}</div>
      <div className="font-display text-xl font-semibold text-cream mb-3.5 leading-snug">{title}</div>
      <div className="text-sm text-txt-dim leading-[1.8]">{desc}</div>
    </div>
  );
}

export default function ValueSection() {
  const { ref, visible } = useReveal();
  return (
    <section id="value" className="relative z-[1] py-[140px] px-6 md:px-12">
      <div className="max-w-[1060px] mx-auto">
        <SectionLabel text="Value Proposition" />
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-[2px] transition-all duration-[900ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
          style={{ background: "var(--border-light)" }}
        >
          {values.map((v) => (
            <ValueCard key={v.icon} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}
