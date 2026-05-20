"use client";

import React from "react";
import BookingForm from "@/components/BookingForm";
import { MapPin, Phone, Mail, Clock, Info, ShieldCheck, Map } from "lucide-react";

export default function ContactPage() {
  const schedule = [
    { day: "Luni", hours: "10:00 – 19:00" },
    { day: "Marți", hours: "10:00 – 19:00" },
    { day: "Miercuri", hours: "10:00 – 19:00" },
    { day: "Joi", hours: "10:00 – 19:00" },
    { day: "Vineri", hours: "10:00 – 19:00" },
    { day: "Sâmbătă", hours: "10:00 – 15:00" },
    { day: "Duminică", hours: "ÎNCHIS", closed: true },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2d1729] tracking-tight font-display">
          Contact și <span className="gradient-text">Localizare</span>
        </h1>
        <p className="text-sm sm:text-base text-[#50314b]/80 leading-relaxed">
          Suntem situați pe Bulevardul Theodor Pallady, cu acces extrem de facil la metrou și parcare. Trimiteți o solicitare de programare online sau sunați-ne direct!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Info Column (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#ead8e7]/60 space-y-6">
            <h2 className="text-xl font-bold text-[#73416a] tracking-wide font-display border-l-2 border-[#c5a880] pl-3">
              Date Contact Clinică
            </h2>

            <ul className="space-y-6 text-sm text-[#50314b]/85">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-xl bg-[#f4ebf3] border border-[#ead8e7] flex items-center justify-center shrink-0 text-[#73416a] mr-4">
                  <MapPin className="w-5 h-5 text-[#73416a]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[#2d1729]">Adresă Fizică</h4>
                  <p className="text-xs leading-relaxed text-[#50314b]/80">
                    B-dul Theodor Pallady, Nr. 4, Bl. M2, Sc A, Ap 1, Interfon 01,
                    Sector 3, București (Scara A, apartament la parter)
                  </p>
                  <div className="flex items-center text-[10px] text-[#8c5284] font-semibold pt-1">
                    <Info className="w-3 h-3 mr-1" />
                    Chiar la ieșirea din metrou Nicolae Grigorescu!
                  </div>
                </div>
              </li>

              <li className="flex items-start">
                <div className="w-10 h-10 rounded-xl bg-[#f4ebf3] border border-[#ead8e7] flex items-center justify-center shrink-0 text-[#73416a] mr-4">
                  <Phone className="w-5 h-5 text-[#73416a]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[#2d1729]">Mobil / Telefon Direct</h4>
                  <p className="text-xs text-[#50314b]/80">
                    Sunați pentru urgențe sau programări telefonice rapide.
                  </p>
                  <p className="text-sm font-extrabold text-[#73416a] hover:text-[#c5a880] transition-colors">
                    <a href="tel:0753455096">0753 455 096</a>
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="w-10 h-10 rounded-xl bg-[#f4ebf3] border border-[#ead8e7] flex items-center justify-center shrink-0 text-[#73416a] mr-4">
                  <Mail className="w-5 h-5 text-[#73416a]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[#2d1729]">Adresă E-mail</h4>
                  <p className="text-xs text-[#50314b]/80">
                    Scrieți-ne pentru întrebări administrative sau colaborări.
                  </p>
                  <p className="text-xs font-bold text-[#73416a] hover:text-[#c5a880] transition-colors">
                    <a href="mailto:contact@stomatolux.ro">contact@stomatolux.ro</a>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Schedule Grid */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#ead8e7]/60">
            <h2 className="text-xl font-bold text-[#73416a] tracking-wide font-display border-l-2 border-[#c5a880] pl-3 mb-6">
              Programul Nostru
            </h2>
            <div className="divide-y divide-[#ead8e7]/30">
              {schedule.map((p) => (
                <div key={p.day} className="flex justify-between py-3 text-sm">
                  <span className="font-semibold text-[#2d1729]">{p.day}</span>
                  <span className={`font-display ${p.closed ? "text-red-500 font-bold" : "text-[#73416a] font-medium"}`}>
                    {p.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Column (7 cols) */}
        <div id="programare" className="lg:col-span-7 scroll-mt-24">
          <BookingForm />
        </div>
      </div>

      {/* Map Section */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2 text-[#73416a]">
          <Map className="w-5 h-5" />
          <h2 className="text-2xl font-bold text-[#2d1729] font-display">
            Localizare pe Hartă
          </h2>
        </div>
        <div className="w-full h-[450px] rounded-3xl overflow-hidden border border-[#ead8e7]/80 shadow-sm relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.144807490074!2d26.160166299999998!3d44.4098679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fe267ef9b8c3%3A0xea8080f55cf5ef16!2sBulevardul%20Theodor%20Pallady%204%2C%20Bucure%C8%99ti%20032251!5e0!3m2!1sro!2sro!4v1716200000000!5m2!1sro!2sro"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Locație Cabinet Stomatolux"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
