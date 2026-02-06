"use client";
import SectionLabel from "./SectionLabel";
import { useReveal } from "./useReveal";

const competencies = [
  { name: "Banking Marketing Strategy", pct: 95 },
  { name: "Campaign Planning & Execution", pct: 92 },
  { name: "Customer Acquisition & Retention", pct: 90 },
  { name: "Compliance-Aligned Messaging", pct: 94 },
  { name: "Performance Measurement & KPIs", pct: 88 },
];

function CompItem({ name, pct, idx }: { name: string; pct: number; idx: number }) {
  const { ref, visible } = useReveal(0.3);
  return (
    <div
      ref={ref}
      className={`py-8 border-b border-[rgba(201,168,76,0.06)] grid grid-cols-[48px_1fr_120px] items-center gap-6 transition-all duration-300 cursor-default hover:pl-4 group ${
        idx === 0 ? "border-t" : ""
      } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
    >
      <div className="font-display text-sm text-gold-dim italic">
        {String(idx + 1).padStart(2, "0")}
      </div>
      <div className="font-display text-lg font-medium text-cream transition-colors group-hover:text-gold">
        {name}
      </div>
      <div className="w-[120px] h-[2px] bg-navy-surface relative overflow-hidden hidden md:block">
        <div
          className="h-full transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            width: visible ? `${pct}%` : "0%",
            background: "linear-gradient(to right, var(--gold-dim), var(--gold))",
          }}
        />
      </div>
    </div>
  );
}

export default function Competencies() {
  const { ref, visible } = useReveal();
  return (
    <section id="competencies" className="relative z-[1] py-[140px] px-6 md:px-12">
      <div className="max-w-[1060px] mx-auto">
        <SectionLabel text="Core Expertise" />
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16 items-start">
          <div
            ref={ref}
            className={`lg:sticky lg:top-[120px] transition-all duration-[900ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
            }`}
          >
            <div className="font-display text-[32px] font-semibold text-cream leading-snug mb-5">
              Built at the intersection of finance and marketing
            </div>
            <div className="text-sm text-txt-dim leading-[1.8]">
              Over twelve years of focused experience in the banking sector has
              refined a unique skillset that bridges financial product knowledge
              with strategic marketing execution.
            </div>
          </div>
          <div className="flex flex-col">
            {competencies.map((c, i) => (
              <CompItem key={c.name} name={c.name} pct={c.pct} idx={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
