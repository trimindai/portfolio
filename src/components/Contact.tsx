"use client";
import { useState } from "react";
import SectionLabel from "./SectionLabel";
import { useReveal } from "./useReveal";

export default function Contact() {
  const { ref: introRef, visible: introVis } = useReveal();
  const { ref: formRef, visible: formVis } = useReveal();
  const [btnText, setBtnText] = useState("Send Message");

  const handleSubmit = () => {
    setBtnText("Sending...");
    setTimeout(() => {
      setBtnText("Message Sent ✓");
      setTimeout(() => setBtnText("Send Message"), 3000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative z-[1] pt-[140px] pb-20 px-6 md:px-12">
      <div className="max-w-[1060px] mx-auto">
        <SectionLabel text="Get In Touch" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div
            ref={introRef}
            className={`transition-all duration-[900ms] ${
              introVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
            }`}
          >
            <h2 className="font-display text-4xl font-semibold text-cream leading-snug mb-5">
              Let&apos;s discuss how strategic marketing can drive your banking
              objectives
            </h2>
            <p className="text-sm text-txt-dim leading-[1.8] mb-10">
              Whether you&apos;re looking to strengthen your brand&apos;s market
              position, navigate regulatory communications, or optimize campaign
              performance — I&apos;d welcome the conversation.
            </p>
            <div className="flex flex-col gap-5">
              {[
                { label: "Email", value: "othman@email.com", href: "mailto:othman@email.com" },
                { label: "Location", value: "Kuwait City, Kuwait" },
                { label: "Sector", value: "Banking & Financial Services" },
              ].map((r) => (
                <div key={r.label} className="flex items-center gap-4">
                  <span className="text-[10px] tracking-[2px] uppercase text-gold min-w-[70px]">
                    {r.label}
                  </span>
                  <span className="text-[15px] text-cream">
                    {r.href ? (
                      <a href={r.href} className="text-cream no-underline hover:text-gold transition-colors">
                        {r.value}
                      </a>
                    ) : (
                      r.value
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={formRef}
            className={`flex flex-col gap-5 contact-form transition-all duration-[900ms] ${
              formVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
            }`}
          >
            {[
              { label: "Full Name", type: "text", placeholder: "Your name" },
              { label: "Email Address", type: "email", placeholder: "your@email.com" },
              { label: "Organization", type: "text", placeholder: "Company or institution" },
            ].map((f) => (
              <div key={f.label} className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[2px] uppercase text-txt-dim">{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="p-3.5 bg-navy-light border border-[rgba(201,168,76,0.06)] text-cream font-body text-sm outline-none transition-all focus:border-gold focus:shadow-[0_0_24px_rgba(201,168,76,0.1)] placeholder:text-txt-dim placeholder:text-[13px]"
                />
              </div>
            ))}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-[2px] uppercase text-txt-dim">Message</label>
              <textarea
                placeholder="How can I help with your marketing objectives?"
                className="p-3.5 bg-navy-light border border-[rgba(201,168,76,0.06)] text-cream font-body text-sm outline-none transition-all focus:border-gold focus:shadow-[0_0_24px_rgba(201,168,76,0.1)] placeholder:text-txt-dim placeholder:text-[13px] min-h-[140px] resize-y"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="p-4 bg-transparent border border-gold text-gold font-body text-xs font-semibold tracking-[2px] uppercase cursor-pointer transition-all mt-1 hover:bg-gold hover:text-navy hover:shadow-[0_4px_30px_rgba(201,168,76,0.2)]"
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
