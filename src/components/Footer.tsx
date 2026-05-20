import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const program = [
    { day: "Luni", hours: "10:00 – 19:00" },
    { day: "Marți", hours: "10:00 – 19:00" },
    { day: "Miercuri", hours: "10:00 – 19:00" },
    { day: "Joi", hours: "10:00 – 19:00" },
    { day: "Vineri", hours: "10:00 – 19:00" },
    { day: "Sâmbătă", hours: "10:00 – 15:00" },
    { day: "Duminică", hours: "ÎNCHIS", closed: true },
  ];

  return (
    <footer className="glass-panel-dark text-white pt-16 pb-8 mt-20 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#73416a]/20 to-[#c5a880]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#8c5284]/15 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand & Intro */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c5a880] to-[#73416a] flex items-center justify-center text-white shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wider text-white font-display">
                  STOMATO<span className="text-[#c5a880]">LUX</span>
                </span>
                <span className="text-[10px] tracking-widest text-[#c491bd] uppercase -mt-1 font-semibold">
                  Clinicist Premium
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              În cadrul cabinetului nostru stomatologic, oferim tratamente premium, tehnologii computerizate 3D de ultimă generație și o atmosferă relaxantă pentru ca zâmbetul tău să strălucească mereu.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#73416a] hover:border-[#73416a] transition-all"
                aria-label="Facebook"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#73416a] hover:border-[#73416a] transition-all"
                aria-label="Instagram"
              >
                <span className="text-sm font-bold">ig</span>
              </a>
            </div>
          </div>

          {/* Quick Contact info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-wide font-display border-l-2 border-[#c5a880] pl-3">
              Informații Contact
            </h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-[#c5a880] shrink-0 mt-0.5" />
                <span>
                  B-dul Theodor Pallady, Nr. 4, Bl. M2, Sc A, Ap 1, Interfon 01,
                  Sector 3, București (Metrou Nicolae Grigorescu)
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#c5a880] shrink-0" />
                <a href="tel:0753455096" className="hover:text-[#c5a880] transition-colors">
                  0753 455 096
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#c5a880] shrink-0" />
                <a href="mailto:contact@stomatolux.ro" className="hover:text-[#c5a880] transition-colors">
                  contact@stomatolux.ro
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-wide font-display border-l-2 border-[#c5a880] pl-3">
              Program Cabinet
            </h3>
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <table className="w-full text-sm text-white/80">
                <tbody>
                  {program.map((p) => (
                    <tr key={p.day} className="border-b border-white/5 last:border-0">
                      <td className="py-2.5 font-medium">{p.day}</td>
                      <td className={`py-2.5 text-right font-display ${p.closed ? "text-red-400 font-bold" : "text-[#e2cdb1]"}`}>
                        <div className="flex items-center justify-end">
                          <Clock className="w-3.5 h-3.5 mr-1.5 opacity-60" />
                          {p.hours}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer Credit & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {currentYear} STOMATOLUX (Serdent Lux S.R.L). Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}
