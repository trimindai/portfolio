"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#value", label: "Value" },
  { href: "#competencies", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#certs", label: "Credentials" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Connect" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center transition-all duration-400"
      style={{
        padding: scrolled ? "14px 48px" : "20px 48px",
        background: "rgba(10, 22, 40, 0.88)",
        backdropFilter: "blur(24px)",
        borderBottom: `1px solid rgba(201, 168, 76, ${scrolled ? 0.15 : 0.06})`,
      }}
    >
      <div className="flex flex-col">
        <div className="font-display text-[16px] font-semibold text-cream tracking-[2px] uppercase">
          Othman Alzanki
        </div>
        <div className="text-[10px] text-gold tracking-[3px] uppercase mt-[2px]">
          Banking Marketing
        </div>
      </div>

      <ul className="hidden md:flex gap-9 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              className="text-txt-light no-underline text-[12px] font-medium tracking-[1.5px] uppercase relative pb-1 transition-colors hover:text-gold group"
            >
              {l.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
