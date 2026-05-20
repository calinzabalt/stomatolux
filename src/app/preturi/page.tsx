"use client";

import React, { useState, useMemo } from "react";
import { pricingData } from "@/data/prices";
import PriceTable from "@/components/PriceTable";
import { Search, ChevronDown, ChevronUp, Sparkles, AlertCircle, FileText, Shield, Baby, Activity, Sparkle, Smile, Stethoscope, Scissors, Eye } from "lucide-react";
import Link from "next/link";

export default function PreturiPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({
    consultatii: true, // Expand consultations by default
  });

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Map icon names to Lucide icons dynamically
  const getIcon = (iconName: string) => {
    const map: { [key: string]: any } = {
      FileText: FileText,
      Shield: Shield,
      Baby: Baby,
      Activity: Activity,
      Sparkles: Sparkles,
      Smile: Smile,
      Stethoscope: Stethoscope,
      Scissors: Scissors,
      Eye: Eye,
    };
    const IconComponent = map[iconName] || Sparkles;
    return <IconComponent className="w-5 h-5 text-[#73416a]" />;
  };

  // Filter prices data based on search term
  const filteredPricingData = useMemo(() => {
    if (!searchTerm.trim()) return pricingData;

    const lowerSearch = searchTerm.toLowerCase();

    return pricingData
      .map((category) => {
        const matchingProcedures = category.procedures.filter(
          (proc) =>
            proc.name.toLowerCase().includes(lowerSearch) ||
            proc.details.toLowerCase().includes(lowerSearch)
        );

        return {
          ...category,
          procedures: matchingProcedures,
        };
      })
      .filter((category) => category.procedures.length > 0);
  }, [searchTerm]);

  // Expand all active accordions when a search term is active
  const displayedAccordions = useMemo(() => {
    if (!searchTerm.trim()) return openAccordions;

    // Expand all that have search matches
    const expanded: { [key: string]: boolean } = {};
    filteredPricingData.forEach((cat) => {
      expanded[cat.id] = true;
    });
    return expanded;
  }, [searchTerm, filteredPricingData, openAccordions]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-1.5 bg-[#f4ebf3] border border-[#ead8e7] px-3.5 py-1 rounded-full text-[10px] font-bold text-[#73416a] tracking-widest uppercase">
          <Sparkles className="w-3 h-3 text-[#c5a880] animate-pulse" />
          <span>Prețuri Transparente & Corecte</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2d1729] tracking-tight font-display">
          Tarife Servicii <span className="gradient-text">Stomatologice</span>
        </h1>
        <p className="text-sm sm:text-base text-[#50314b]/80 leading-relaxed">
          Spre deosebire de vechiul site care afișa prețurile în format imagine greu de citit, vă oferim o listă digitală completă, transparentă și complet căutabilă. Consultațiile de bază și protetică sunt gratuite.
        </p>
      </div>

      {/* Search Bar section */}
      <div className="max-w-2xl mx-auto relative">
        <div className="relative">
          <Search className="absolute left-4 top-4 w-5 h-5 text-[#8c5284] pointer-events-none" />
          <input
            type="text"
            placeholder="Caută o procedură (ex: 'extracție', 'implant', 'compozit')..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/70 border border-[#ead8e7] rounded-2xl shadow-xs text-sm focus:outline-none focus:ring-2 focus:ring-[#8c5284] focus:border-transparent transition-all placeholder:text-gray-400"
          />
        </div>
        {searchTerm && (
          <div className="text-xs text-[#50314b]/70 mt-2 ml-2">
            Afișăm rezultatele care se potrivesc cu &ldquo;{searchTerm}&rdquo;...
          </div>
        )}
      </div>

      {/* Pricing list Accordions */}
      <div className="space-y-6">
        {filteredPricingData.length > 0 ? (
          filteredPricingData.map((category) => {
            const isExpanded = !!displayedAccordions[category.id];
            return (
              <div
                key={category.id}
                className="glass-card rounded-2xl border border-[#ead8e7]/55 overflow-hidden transition-all duration-300"
              >
                {/* Header Button */}
                <button
                  onClick={() => toggleAccordion(category.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none bg-gradient-to-r from-white/30 to-[#fdfafc]/20 hover:from-[#fdfafc]/40 hover:to-[#f4ebf3]/30 transition-colors"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#f4ebf3] border border-[#ead8e7] flex items-center justify-center">
                      {getIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#2d1729] font-display">
                        {category.title}
                      </h3>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-[#8c5284] mt-0.5">
                        {category.procedures.length} proceduri disponibile
                      </p>
                    </div>
                  </div>
                  <div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[#73416a]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#73416a]" />
                    )}
                  </div>
                </button>

                {/* Body Table Container */}
                {isExpanded && (
                  <div className="px-4 pb-6 pt-2 bg-white/5 border-t border-[#ead8e7]/30">
                    <PriceTable procedures={category.procedures} />
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="glass-card p-12 text-center rounded-2xl border border-dashed border-[#ead8e7] space-y-4 max-w-lg mx-auto">
            <AlertCircle className="w-12 h-12 text-[#c5a880] mx-auto animate-pulse" />
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[#2d1729] font-display">
                Niciun rezultat găsit
              </h3>
              <p className="text-xs text-[#50314b]/80 leading-relaxed">
                Nu am găsit nicio procedură care să corespundă termenului de căutare. Încercați termeni simpli sau sunați direct în cabinet pentru o confirmare imediată.
              </p>
            </div>
            <button
              onClick={() => setSearchTerm("")}
              className="btn-secondary px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold"
            >
              Resetează Căutarea
            </button>
          </div>
        )}
      </div>

      {/* Footer Info Notice */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-[#f4ebf3]/60 border border-[#ead8e7]/60 gap-4">
        <div className="flex items-start text-xs text-[#50314b] leading-relaxed">
          <AlertCircle className="w-5 h-5 mr-3 text-[#73416a] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#73416a]">Notă importantă:</span> Prețurile afișate au rol informativ. Planul final de tratament și costurile totale sunt stabilite de medicul specialist în urma consultației clinice detaliate și a investigațiilor radiologice.
          </div>
        </div>
        <Link
          href="/contact#programare"
          className="btn-primary shrink-0 px-6 py-3 rounded-full text-xs uppercase tracking-wider font-bold"
        >
          Programează-te
        </Link>
      </div>
    </div>
  );
}
