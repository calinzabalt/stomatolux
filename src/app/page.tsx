import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Activity, ShieldCheck, Heart, Clock, Phone, MapPin, Star, Sparkle } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import { servicesData } from "@/data/services";

export default function Home() {
  // Highlight 6 prominent services on the homepage
  const featuredServices = servicesData.slice(0, 6);

  const stats = [
    { value: "100%", label: "Tratamente Fără Durere" },
    { value: "10k+", label: "Pacienți Fericiți" },
    { value: "15+", label: "Ani de Excelență" },
    { value: "30 min", label: "Urgențe Stomatologice" },
  ];

  const coreBenefits = [
    {
      title: "Tehnologie 3D de Vârf",
      description: "Utilizăm sisteme computerizate avansate precum CEREC CAD/CAM și radiologie 3D de maximă precizie.",
      icon: <Activity className="w-6 h-6 text-[#73416a]" />,
    },
    {
      title: "100% Siguranță și Confort",
      description: "Folosim anestezice moderne de ultimă generație și sterilizare ultrasonică rigidă pentru siguranța ta.",
      icon: <ShieldCheck className="w-6 h-6 text-[#73416a]" />,
    },
    {
      title: "Plan de Tratament Personalizat",
      description: "Fiecare zâmbet primește un plan clinic complet adaptat nevoilor funcționale și estetice unice.",
      icon: <Heart className="w-6 h-6 text-[#73416a]" />,
    },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* 1. Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-10 px-4 sm:px-6 lg:px-8">
        {/* Abstract blur background blobs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#f4ebf3] rounded-full blur-3xl opacity-60 -z-10 animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ead8e7]/50 rounded-full blur-3xl opacity-40 -z-10 pointer-events-none" />
        <div className="absolute top-10 right-10 w-48 h-48 bg-[#e2cdb1]/20 rounded-full blur-2xl -z-10 pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#f4ebf3] border border-[#ead8e7] px-4 py-1.5 rounded-full text-xs font-semibold text-[#73416a] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a880] animate-spin-slow" />
            <span>Cabinet Stomatologic Premium București</span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#2d1729] leading-tight">
              Zâmbetul Tău, <br className="sm:hidden" />
              <span className="gradient-text">Pasiunea Noastră</span>
            </h1>
            <p className="text-base sm:text-xl text-[#50314b]/80 max-w-2xl mx-auto leading-relaxed">
              Tratamente stomatologice moderne și digitale realizate cu maximum de atenție, sterilizare rigidă și anestezie complet nedureroasă. Experimentează stomatologia viitorului în București.
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact#programare"
              className="btn-primary w-full sm:w-auto px-8 py-4 rounded-full text-sm uppercase tracking-wider font-bold shadow-md"
            >
              Fă o programare
            </Link>
            <Link
              href="/servicii"
              className="btn-secondary w-full sm:w-auto px-8 py-4 rounded-full text-sm uppercase tracking-wider font-bold flex items-center justify-center gap-2"
            >
              Vezi Serviciile
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#ead8e7]/60 max-w-4xl mx-auto">
            {stats.map((s, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#73416a] font-display">
                  {s.value}
                </div>
                <div className="text-xs text-[#50314b]/75 font-medium tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Core Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2d1729] font-display">
            Standarde Premium pentru Sănătatea Ta
          </h2>
          <p className="text-sm sm:text-base text-[#50314b]/75 max-w-xl mx-auto leading-relaxed">
            Ne diferențiem prin calitatea desăvârșită a materialelor, echipamente ultra-moderne 3D și o abordare caldă axată complet pe confortul pacientului.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreBenefits.map((b, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl border border-[#ead8e7]/50 space-y-5 text-center sm:text-left relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#f4ebf3] border border-[#ead8e7] flex items-center justify-center mx-auto sm:mx-0 shadow-xs">
                {b.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#2d1729] font-display">
                  {b.title}
                </h3>
                <p className="text-sm text-[#50314b]/80 leading-relaxed">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Services Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 text-center sm:text-left">
            <div className="inline-flex items-center space-x-1.5 bg-[#f4ebf3] border border-[#ead8e7] px-3.5 py-1 rounded-full text-[10px] font-bold text-[#73416a] tracking-widest uppercase">
              <Sparkle className="w-3 h-3 text-[#c5a880]" />
              <span>Gama Noastră de Servicii</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2d1729] font-display">
              Tratamente Digitale & Estetice
            </h2>
          </div>
          <Link
            href="/servicii"
            className="btn-secondary px-6 py-3 rounded-full text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 self-center sm:self-end"
          >
            Vezi Toate Cele 16 Servicii
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card p-6 rounded-3xl border border-[#ead8e7]/55 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="h-2 bg-[#ead8e7]/40 w-16 rounded-full" />
                <h3 className="text-lg font-bold text-[#73416a] font-display">
                  {service.title}
                </h3>
                <p className="text-xs text-[#50314b]/70 font-semibold tracking-wide uppercase italic">
                  {service.shortDesc}
                </p>
                <p className="text-sm text-[#50314b]/80 leading-relaxed line-clamp-3">
                  {service.longDesc}
                </p>
              </div>
              <div className="pt-4 border-t border-[#ead8e7]/30">
                <Link
                  href={`/servicii#${service.id}`}
                  className="text-[#73416a] hover:text-[#c5a880] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  Detalii Serviciu
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Luxury Testimonial/Credibility Slider */}
      <section className="bg-gradient-to-r from-[#73416a] to-[#8c5284] text-white py-20 relative overflow-hidden">
        {/* Overlay graphic background patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(#c5a880_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#c5a880]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center space-y-8 relative z-10">
          <div className="flex justify-center space-x-1.5 text-[#c5a880]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
          </div>
          <blockquote className="text-lg sm:text-2xl font-light italic leading-relaxed text-white/95">
            &ldquo;Am beneficiat de sistemul de fațete premium la cabinetul Stomatolux și pot spune că mi-a schimbat viața complet. Medicii sunt incredibil de atenți, cabinetul arată impecabil, iar tehnologia computerizată te face să te simți în deplină siguranță. Nu am simțit nicio durere!&rdquo;
          </blockquote>
          <div className="space-y-1">
            <p className="font-bold text-[#e2cdb1] font-display text-base sm:text-lg">Elena Vasilescu</p>
            <p className="text-xs uppercase tracking-widest text-[#c491bd] font-semibold">Pacientă Stomatolux (București)</p>
          </div>
        </div>
      </section>

      {/* 5. Appointment Booking & Program Grid */}
      <section id="programari" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text and Hours Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 bg-[#f4ebf3] border border-[#ead8e7] px-3.5 py-1 rounded-full text-[10px] font-bold text-[#73416a] tracking-widest uppercase">
                <Clock className="w-3 h-3 text-[#c5a880]" />
                <span>Asistență Rapidă</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2d1729] font-display">
                Rezervă Zâmbetul Tău Ideal Astăzi
              </h2>
              <p className="text-sm sm:text-base text-[#50314b]/80 leading-relaxed">
                Cabinetul nostru este situat convenabil pe Bulevardul Theodor Pallady Nr. 4, chiar lângă gura de metrou Nicolae Grigorescu. Suntem gata să preluăm solicitările dvs. cu profesionalism și promptitudine.
              </p>
            </div>

            {/* Quick coordinates */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-xl bg-[#f4ebf3] border border-[#ead8e7] flex items-center justify-center shrink-0 text-[#73416a] mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2d1729]">Locație Clinică</h4>
                  <p className="text-xs text-[#50314b]/80 mt-0.5 leading-relaxed">
                    Str. B-DUL THEODOR PALLADY, Nr. 4, Bl. M2, Sc A, Ap 1, Interfon 01, București
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-xl bg-[#f4ebf3] border border-[#ead8e7] flex items-center justify-center shrink-0 text-[#73416a] mr-4">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2d1729]">Telefon Programări</h4>
                  <p className="text-xs text-[#50314b]/80 mt-0.5 font-bold text-[#73416a] hover:text-[#c5a880] transition-colors">
                    <a href="tel:0753455096">0753 455 096</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  );
}
