"use client";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);

    // Add class that forces all content visible via CSS
    document.body.classList.add("printing-cv");

    setTimeout(() => {
      window.print();

      // Restore after print dialog closes
      setTimeout(() => {
        document.body.classList.remove("printing-cv");
        setDownloading(false);
      }, 500);
    }, 300);
  };

  return (
    <section id="hero" className="relative z-[1] min-h-screen flex items-center pt-[100px] px-6 md:px-12">
      <div className="max-w-[1060px] mx-auto w-full">
        <div className="hero-layout grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <div
              className="text-[12px] tracking-[4px] uppercase text-gold font-medium mb-5 opacity-0"
              style={{ animation: "fadeUp 0.7s 0.3s forwards" }}
            >
              Banking Marketing Specialist — Kuwait
            </div>

            <h1
              className="font-display text-[clamp(48px,7vw,82px)] font-bold text-cream leading-[1.05] mb-7 opacity-0"
              style={{ animation: "fadeUp 0.7s 0.6s forwards" }}
            >
              Othman
              <br />
              Alzanki
              <span className="block text-gold italic font-medium text-[0.55em] mt-2">
                Building trust through strategic communication
              </span>
            </h1>

            <div
              className="w-16 h-px mb-7 opacity-0"
              style={{
                background: "linear-gradient(to right, var(--gold), transparent)",
                animation: "fadeUp 0.7s 0.8s forwards",
              }}
            />

            <p
              className="font-serif text-[clamp(18px,2.2vw,22px)] text-txt leading-[1.75] max-w-[620px] mb-12 opacity-0"
              style={{ animation: "fadeUp 0.7s 1s forwards" }}
            >
              Senior marketing specialist with over twelve years of experience
              translating complex financial products into clear, customer-focused
              messaging — while maintaining full compliance with regulatory and
              governance standards.
            </p>

            <div
              className="flex gap-5 flex-wrap opacity-0 hero-actions"
              style={{ animation: "fadeUp 0.7s 1.2s forwards" }}
            >
              <a
                href="mailto:othman@email.com"
                className="inline-flex items-center gap-2.5 px-9 py-4 border border-gold text-gold font-body text-[12px] font-semibold tracking-[2px] uppercase no-underline transition-all duration-400 hover:bg-gold hover:text-navy hover:shadow-[0_4px_30px_rgba(201,168,76,0.2)]"
              >
                Get In Touch
              </a>
              <button
                onClick={handleDownload}
                className={`inline-flex items-center gap-2.5 px-9 py-4 border font-body text-[12px] font-medium tracking-[2px] uppercase transition-all duration-400 bg-transparent cursor-pointer ${
                  downloading
                    ? "border-gold text-gold"
                    : "border-[rgba(201,168,76,0.12)] text-txt-light hover:border-gold hover:text-gold"
                }`}
              >
                {downloading ? "Preparing PDF..." : "Download CV ↓"}
              </button>
            </div>
          </div>

          {/* Photo */}
          <div
            className="justify-self-center lg:justify-self-end opacity-0"
            style={{ animation: "fadeUp 0.7s 1.4s forwards" }}
          >
            <div className="relative">
              <div className="absolute top-3 left-3 w-full h-full border border-gold z-[1]" />
              <Image
                src="/images/othman.jpg"
                alt="Othman Alzanki"
                width={280}
                height={340}
                className="relative z-[2] object-cover object-top"
                style={{ filter: "grayscale(15%) contrast(1.05)", width: 280, height: 340 }}
                priority
              />
            </div>
            <div className="text-center mt-8 text-[10px] tracking-[3px] uppercase text-gold-dim">
              Kuwait City
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div
          className="flex gap-14 mt-[72px] pt-12 border-t border-[rgba(201,168,76,0.06)] flex-wrap opacity-0"
          style={{ animation: "fadeUp 0.7s 1.5s forwards" }}
        >
          {[
            { num: "12+", label: "Years Experience" },
            { num: "Banking", label: "Sector Focus" },
            { num: "CBK", label: "Regulatory Aligned" },
            { num: "AML", label: "Certified" },
          ].map((m) => (
            <div key={m.label}>
              <div className="font-display text-4xl font-bold text-gold leading-none">
                {m.num}
              </div>
              <div className="text-[11px] text-txt-dim tracking-[2px] uppercase mt-2">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
