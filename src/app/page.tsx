import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueSection from "@/components/ValueSection";
import Competencies from "@/components/Competencies";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Ambient background orbs */}
      <div className="fixed rounded-full pointer-events-none z-0 w-[600px] h-[600px] -top-[200px] -right-[200px] blur-[120px]" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.04), transparent 70%)" }} />
      <div className="fixed rounded-full pointer-events-none z-0 w-[500px] h-[500px] bottom-[20%] -left-[150px] blur-[120px]" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.03), transparent 70%)" }} />

      {/* Grain overlay */}
      <div
        className="grain fixed inset-0 pointer-events-none z-[9998] opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <Navbar />
      <Hero />
      <ValueSection />
      <Competencies />
      <Experience />
      <Certifications />
      <Approach />
      <Contact />
      <Footer />
    </>
  );
}
