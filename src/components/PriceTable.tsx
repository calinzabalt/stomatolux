import React from "react";
import { Procedure } from "@/data/prices";
import { Info, Tag } from "lucide-react";

interface PriceTableProps {
  procedures: Procedure[];
}

export default function PriceTable({ procedures }: PriceTableProps) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#ead8e7]/60 shadow-sm bg-white/40 backdrop-blur-md">
      {/* Desktop Table View */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gradient-to-r from-[#73416a]/10 to-[#8c5284]/5 border-b border-[#ead8e7]/80">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#73416a] font-display">
                Procedură / Tratament
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#73416a] font-display">
                Detalii Clinice
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#73416a] font-display text-right w-36">
                Preț Standard
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#ead8e7]/40">
            {procedures.map((proc, index) => (
              <tr
                key={index}
                className="hover:bg-[#fdfafc]/60 transition-colors duration-150 group"
              >
                <td className="px-6 py-4.5 text-sm font-semibold text-[#2d1729] group-hover:text-[#73416a] transition-colors">
                  {proc.name}
                </td>
                <td className="px-6 py-4.5 text-sm text-[#50314b]/80 font-normal">
                  {proc.details || "–"}
                </td>
                <td className="px-6 py-4.5 text-sm font-bold text-[#73416a] text-right font-display whitespace-nowrap">
                  <span className="inline-block px-3 py-1.5 rounded-full bg-[#f4ebf3] text-[#73416a] border border-[#ead8e7]/40 shadow-xs">
                    {proc.price}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card-List View */}
      <div className="block sm:hidden divide-y divide-[#ead8e7]/40">
        {procedures.map((proc, index) => (
          <div
            key={index}
            className="p-5 bg-white/20 hover:bg-[#fdfafc]/80 transition-colors space-y-3"
          >
            <div className="text-sm font-bold text-[#2d1729] leading-snug">
              {proc.name}
            </div>
            {proc.details && (
              <div className="flex items-start text-xs text-[#50314b]/80 leading-relaxed bg-[#fdfafc]/60 p-2 rounded-lg border border-[#ead8e7]/20">
                <Info className="w-3.5 h-3.5 mr-1.5 text-[#8c5284] shrink-0 mt-0.5" />
                <span>{proc.details}</span>
              </div>
            )}
            <div className="flex items-center justify-between pt-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#8c5284] flex items-center">
                <Tag className="w-3 h-3 mr-1" /> Preț
              </span>
              <span className="text-sm font-extrabold text-[#73416a] bg-[#f4ebf3] px-3 py-1 rounded-full border border-[#ead8e7]/30 shadow-xs font-display">
                {proc.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
