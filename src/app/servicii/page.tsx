import React from "react";
import { servicesData } from "@/data/services";
import * as Icons from "lucide-react";
import Link from "next/link";

// Helper to select dynamic Lucide icons safely
function renderIcon(iconName: string) {
  // Map string names to actual Lucide component names
  const iconMap: { [key: string]: any } = {
    Stethoscope: Icons.Stethoscope,
    Cpu: Icons.Cpu,
    Baby: Icons.Baby,
    Sparkles: Icons.Sparkles,
    Sparkle: Icons.Sparkle,
    ShieldAlert: Icons.ShieldCheck, // Replaced Alert with Check for premium health feel
    Scissors: Icons.Scissors,
    Heart: Icons.Heart,
    Activity: Icons.Activity,
    Wrench: Icons.Settings, // Wrench -> Settings for clinical tone
    Layers: Icons.Layers,
    Clock: Icons.Clock,
    Zap: Icons.Zap,
    Link: Icons.Link,
    Search: Icons.Search,
    Eye: Icons.Sparkles // Eye -> Sparkles
  };

  const IconComponent = iconMap[iconName] || Icons.Sparkles;
  return <IconComponent className="w-8 h-8 text-[#73416a]" />;
}

export default function ServiciiPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2d1729] tracking-tight font-display">
          Serviciile Noastre <span className="gradient-text">Stomatologice</span>
        </h1>
        <p className="text-sm sm:text-base text-[#50314b]/80 leading-relaxed">
          În cadrul cabinetului nostru stomatologic din București, Theodor Pallady, oferim o gamă completă de 16 servicii dentare premium, acoperind toate specialitățile pentru întreaga familie. De la diagnostic computerizat de înaltă finețe la implantologie și estetică.
        </p>
      </div>

      {/* Grid of 16 Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="glass-card p-8 rounded-3xl border border-[#ead8e7]/60 shadow-sm relative group flex flex-col justify-between scroll-mt-24 transition-all duration-300"
          >
            {/* Ambient decorative border color shift on hover */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#73416a]/40 to-[#c5a880]/30 rounded-t-3xl group-hover:from-[#73416a] group-hover:to-[#c5a880] transition-all" />

            <div className="space-y-6">
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-[#f4ebf3] border border-[#ead8e7] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                {renderIcon(service.iconName)}
              </div>

              {/* Title & Descs */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#2d1729] font-display">
                  {service.title}
                </h3>
                <div className="text-xs uppercase font-extrabold tracking-wider text-[#c5a880] bg-[#fdfafc]/60 inline-block px-2.5 py-1 rounded-md border border-[#ead8e7]/30">
                  {service.shortDesc}
                </div>
                <p className="text-sm text-[#50314b]/80 leading-relaxed pt-2">
                  {service.longDesc}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#ead8e7]/30 mt-6 flex items-center justify-between">
              <Link
                href="/preturi"
                className="text-xs font-semibold text-[#8c5284] hover:text-[#73416a] transition-colors"
              >
                Vezi listă prețuri
              </Link>
              <Link
                href="/contact#programare"
                className="text-xs font-bold text-[#73416a] hover:text-[#c5a880] uppercase tracking-wider flex items-center gap-1"
              >
                Programare
                <Icons.ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action footer banner */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#ead8e7]/80 text-center space-y-6 max-w-5xl mx-auto shadow-sm relative overflow-hidden bg-gradient-to-br from-white/70 to-[#fdfafc]/40">
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#c5a880]/15 rounded-full blur-3xl" />
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2d1729] font-display">
          Ai nevoie de un diagnostic sau tratament de urgență?
        </h2>
        <p className="text-sm text-[#50314b]/85 max-w-xl mx-auto leading-relaxed">
          Nu lăsa durerea dentară sau o mică carie să îți afecteze calitatea vieții. Programează-te acum la Cabinetul Stomatolux și beneficiază de asistență premium promptă.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/contact#programare"
            className="btn-primary w-full sm:w-auto px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-bold"
          >
            Fă o Programare Online
          </Link>
          <a
            href="tel:0753455096"
            className="btn-secondary w-full sm:w-auto px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-bold"
          >
            Sună Direct: 0753 455 096
          </a>
        </div>
      </div>
    </div>
  );
}
