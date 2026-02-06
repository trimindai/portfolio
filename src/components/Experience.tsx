"use client";
import SectionLabel from "./SectionLabel";
import { useReveal } from "./useReveal";

const experiences = [
  {
    category: "Strategic Marketing",
    title: "Banking Marketing Campaigns",
    points: [
      "Planned and executed integrated marketing initiatives for financial products and services across multiple channels",
      "Developed messaging frameworks suitable for regulated financial environments",
      "Monitored campaign performance and refined strategies based on analytical insights and KPI tracking",
    ],
  },
  {
    category: "Regulatory Compliance",
    title: "CBK-Aligned Initiatives",
    points: [
      "Participated in marketing initiatives and projects aligned with Central Bank of Kuwait guidelines and programs",
      "Ensured all customer communications met banking regulatory standards",
      "Built compliance review processes into the marketing workflow",
    ],
  },
  {
    category: "Customer Growth",
    title: "Acquisition & Retention",
    points: [
      "Translated complex financial products into clear, accessible customer-focused messaging",
      "Developed strategies to strengthen brand credibility and customer trust",
      "Focused on sustainable growth through data-driven decision making",
    ],
  },
  {
    category: "Brand Development",
    title: "Brand Trust & Communication",
    points: [
      "Strengthened institutional brand through transparent and responsible communication practices",
      "Created cohesive brand narratives across digital and traditional channels",
      "Aligned marketing output with organizational values and governance standards",
    ],
  },
];

function ExpCard({ category, title, points }: (typeof experiences)[0]) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`p-12 bg-navy-light border border-[rgba(201,168,76,0.06)] relative transition-all duration-400 hover:border-[rgba(201,168,76,0.12)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
      }`}
    >
      <div className="absolute -top-px left-12 w-12 h-[2px] bg-gold" />
      <div className="text-[10px] tracking-[3px] uppercase text-gold mb-5">{category}</div>
      <div className="font-display text-[22px] font-semibold text-cream leading-[1.35] mb-5">{title}</div>
      <ul className="list-none flex flex-col gap-3.5">
        {points.map((p, i) => (
          <li key={i} className="text-sm text-txt-dim leading-[1.7] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-px before:bg-gold">
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative z-[1] py-[140px] px-6 md:px-12">
      <div className="max-w-[1060px] mx-auto">
        <SectionLabel text="Selected Experience" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {experiences.map((e) => (
            <ExpCard key={e.title} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
}
