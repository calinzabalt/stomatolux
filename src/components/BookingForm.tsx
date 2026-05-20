"use client";

import React, { useState } from "react";
import { Calendar, User, Phone, Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";

export default function BookingForm() {
  const [formState, setFormState] = useState({
    nume: "",
    email: "",
    telefon: "",
    data: "",
    mesaj: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "programare-stomatolux", ...formState }),
      });
      setStatus("success");
      setFormState({ nume: "", email: "", telefon: "", data: "", mesaj: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="glass-card p-8 rounded-3xl text-center space-y-6 border border-emerald-500/20 bg-emerald-50/10">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-sm animate-bounce">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-[#2d1729] font-display">
            Solicitare Trimisă cu Succes!
          </h3>
          <p className="text-sm text-[#50314b]/80 max-w-sm mx-auto leading-relaxed">
            Vă mulțumim pentru încredere. Un specialist din echipa Stomatolux vă va contacta telefonic în cel mai scurt timp pentru confirmarea programării.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="btn-primary px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold"
        >
          Trimite o altă solicitare
        </button>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#ead8e7]/60 shadow-md relative overflow-hidden bg-white/30 backdrop-blur-md">
      {/* Dynamic ambient background blobs */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-[#73416a]/10 to-[#c5a880]/5 rounded-full blur-2xl pointer-events-none" />

      <h3 className="text-xl font-bold text-[#73416a] tracking-wide mb-2 font-display">
        Fă o Programare Rapidă
      </h3>
      <p className="text-xs text-[#50314b]/70 leading-relaxed mb-6">
        Completați datele de mai jos, iar noi vă vom suna în maximum 30 de minute pentru confirmarea datei și orei exacte.
      </p>

      <form
        name="programare-stomatolux"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {/* Hidden inputs required for Netlify static form parsing */}
        <input type="hidden" name="form-name" value="programare-stomatolux" />

        {/* Name input */}
        <div className="space-y-1">
          <label htmlFor="nume" className="text-xs font-bold uppercase tracking-wider text-[#50314b]/85 block">
            Nume Complet
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-3.5 w-4 h-4 text-[#8c5284] pointer-events-none" />
            <input
              type="text"
              name="nume"
              id="nume"
              value={formState.nume}
              onChange={handleChange}
              placeholder="Ex: Ioan Popescu"
              required
              className="w-full pl-10 pr-4 py-3 bg-white/60 border border-[#ead8e7] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8c5284] focus:border-transparent transition-all placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Email & Phone input row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#50314b]/85 block">
              Adresă E-mail
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-[#8c5284] pointer-events-none" />
              <input
                type="email"
                name="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Ex: popescu@gmail.com"
                required
                className="w-full pl-10 pr-4 py-3 bg-white/60 border border-[#ead8e7] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8c5284] focus:border-transparent transition-all placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="telefon" className="text-xs font-bold uppercase tracking-wider text-[#50314b]/85 block">
              Telefon Mobil
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-[#8c5284] pointer-events-none" />
              <input
                type="tel"
                name="telefon"
                id="telefon"
                value={formState.telefon}
                onChange={handleChange}
                placeholder="Ex: 07xx xxx xxx"
                required
                className="w-full pl-10 pr-4 py-3 bg-white/60 border border-[#ead8e7] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8c5284] focus:border-transparent transition-all placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Date input */}
        <div className="space-y-1">
          <label htmlFor="data" className="text-xs font-bold uppercase tracking-wider text-[#50314b]/85 block">
            Data Dorită Programare
          </label>
          <div className="relative">
            <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-[#8c5284] pointer-events-none" />
            <input
              type="date"
              name="data"
              id="data"
              value={formState.data}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 bg-white/60 border border-[#ead8e7] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8c5284] focus:border-transparent transition-all placeholder:text-gray-400 text-gray-700"
            />
          </div>
        </div>

        {/* Message input */}
        <div className="space-y-1">
          <label htmlFor="mesaj" className="text-xs font-bold uppercase tracking-wider text-[#50314b]/85 block">
            Mesaj / Detalii Suplimentare (Opțional)
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-[#8c5284] pointer-events-none" />
            <textarea
              name="mesaj"
              id="mesaj"
              rows={3}
              value={formState.mesaj}
              onChange={handleChange}
              placeholder="Spune-ne pe scurt ce problemă stomatologică dorești să rezolvi..."
              className="w-full pl-10 pr-4 py-3 bg-white/60 border border-[#ead8e7] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8c5284] focus:border-transparent transition-all placeholder:text-gray-400 resize-none"
            />
          </div>
        </div>

        {/* Feedback messages */}
        {status === "error" && (
          <p className="text-xs font-semibold text-red-500 bg-red-50/50 p-2.5 rounded-lg border border-red-200">
            A apărut o eroare la trimitere. Vă rugăm să ne sunați direct la numărul din antet!
          </p>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full py-3.5 rounded-xl uppercase tracking-wider text-xs font-bold flex items-center justify-center gap-2 group transition-all"
        >
          {status === "submitting" ? (
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              Trimite Cererea
              <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
