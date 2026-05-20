"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Acasă", path: "/" },
    { name: "Servicii", path: "/servicii" },
    { name: "Prețuri", path: "/preturi" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass-panel shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#73416a] to-[#c5a880] flex items-center justify-center text-white shadow-md transform transition-transform group-hover:rotate-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-[#73416a] font-display">
                STOMATO<span className="text-[#c5a880]">LUX</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#8c5284] uppercase -mt-1 font-semibold">
                Clinicist Premium
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#73416a] relative ${
                    isActive
                      ? "text-[#73416a] font-semibold"
                      : "text-[#50314b]/80"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-gradient-to-r from-[#73416a] to-[#c5a880] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:0753455096"
              className="flex items-center text-sm font-semibold text-[#73416a] hover:text-[#c5a880] transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              0753 455 096
            </a>
            <Link
              href="/contact#programare"
              className="btn-primary px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold"
            >
              Fă o programare
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#73416a] p-2 hover:bg-[#f4ebf3] rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 top-[60px] bg-[#fdfafc] z-40 transition-all duration-300 transform ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="px-4 pt-6 pb-8 space-y-4 shadow-inner">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-[#73416a] to-[#8c5284] text-white"
                    : "text-[#50314b] hover:bg-[#f4ebf3]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="border-t border-[#ead8e7] pt-6 mt-6 space-y-4 px-4">
            <a
              href="tel:0753455096"
              className="flex items-center text-[#73416a] font-bold text-lg"
            >
              <Phone className="w-5 h-5 mr-3 text-[#c5a880]" />
              0753 455 096
            </a>
            <Link
              href="/contact#programare"
              onClick={() => setIsOpen(false)}
              className="btn-primary block text-center py-3 rounded-full text-sm uppercase tracking-wider font-bold"
            >
              Fă o programare
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
