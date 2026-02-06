"use client";
import SectionLabel from "./SectionLabel";
import { useReveal } from "./useReveal";

export default function Approach() {
  const { ref, visible } = useReveal();
  return (
    <section id="approach" className="relative z-[1] py-[140px] px-6 md:px-12">
      <div className="max-w-[1060px] mx-auto">
        <SectionLabel text="Professional Approach" />
        <div
          ref={ref}
          className={`max-w-[680px] transition-all duration-[900ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
          }`}
        >
          <div className="font-serif text-[clamp(22px,3vw,30px)] font-normal text-cream leading-[1.7] italic pl-8 border-l-2 border-gold mb-10">
            Grounded in structured planning, regulatory awareness, and
            data-driven execution — each engagement begins with understanding,
            followed by disciplined implementation and continuous optimization.
          </div>
          <p className="text-[15px] text-txt-dim leading-[1.9]">
            Every project starts with a comprehensive understanding of the
            banking product and its target audience. This is followed by
            disciplined implementation that respects both business objectives and
            compliance requirements. The result is marketing that builds genuine
            trust — the most valuable asset in financial services.
          </p>
        </div>
      </div>
    </section>
  );
}
