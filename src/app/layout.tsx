import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Othman Alzanki — Banking Marketing Specialist",
  description:
    "Senior marketing specialist with over 12 years of experience in banking and financial services. Compliance-aligned strategies, campaign planning, and brand trust.",
  keywords: ["banking marketing", "Kuwait", "financial services", "marketing specialist", "compliance"],
  openGraph: {
    title: "Othman Alzanki — Banking Marketing Specialist",
    description: "12+ years in banking marketing. Compliance-aligned strategies that build brand trust.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
