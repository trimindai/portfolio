"use client";
import SectionLabel from "./SectionLabel";
import { useReveal } from "./useReveal";

const certs = [
  { abbr: "AML", name: "Anti-Money Laundering", org: "Banking Union Training Programs" },
  { abbr: "CRF", name: "Compliance & Regulatory Frameworks", org: "Banking Union Training Programs" },
];

function CertCard({ abbr, name, org }: (typeof certs)[0]) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`p-10 bg-navy-light border border-[rgba(201,168,76,0.06)] flex items-start gap-6 transition-all duration-400 hover:border-gold hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
      }`}
    >
      <div className="w-14 h-14 border border-gold flex items-center justify-center flex-shrink-0 relative">
        <div className="absolute inset-1 border border-[rgba(201,168,76,0.12)]" />
        <span className="font-display text-sm font-bold text-gold">{abbr}</span>
      </div>
      <div>
        <div className="font-display text-[17px] font-semibold text-cream mb-1.5 leading-snug">{name}</div>
        <div className="text-xs text-txt-dim tracking-[1px]">{org}</div>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certs" className="relative z-[1] py-[140px] px-6 md:px-12">
      <div className="max-w-[1060px] mx-auto">
        <SectionLabel text="Credentials" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((c) => (
            <CertCard key={c.abbr} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
