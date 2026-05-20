import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Stomatolux - Cabinet Stomatologic Premium București | Theodor Pallady",
  description: "Cabinet stomatologic de top în București, B-dul Theodor Pallady. Servicii dentare de lux: implanturi, aparate dentare, coroane zirconiu, tratament parodontal și urgențe în 30 min. Tehnologie 3D CAD/CAM.",
  keywords: ["cabinet stomatologic bucuresti", "dentist theodor pallady", "implant dentar bucuresti", "urgenta stomatologica bucuresti", "aparat dentar", "coroane zirconiu", "stomatolux"],
  authors: [{ name: "Stomatolux" }],
  openGraph: {
    title: "Stomatolux - Cabinet Stomatologic Premium București",
    description: "Zâmbetul tău, pasiunea noastră. Servicii stomatologice premium la prețuri corecte. Dotări ultra-moderne, diagnostic rapid și tratamente fără durere în Sector 3.",
    url: "https://stomatolux.ro",
    siteName: "Stomatolux",
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#fdfafc] antialiased">
        <Navbar />
        {/* Main wrapper with top padding to offset fixed Navbar */}
        <main className="flex-grow pt-24 sm:pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
