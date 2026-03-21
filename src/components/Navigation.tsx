"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-dark backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.svg"
              alt="CraftFood"
              width={180}
              height={40}
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { href: "/", label: "Início" },
              { href: "/#sobre", label: "Sobre Nós" },
              { href: "/#populares", label: "Populares" },
              { href: "/#galeria", label: "Galeria" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-white/70 hover:text-white text-sm font-body font-medium tracking-wide transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cardapio"
              className="bg-brand-gold/10 border border-brand-gold/40 hover:bg-brand-gold hover:text-brand-dark text-brand-gold text-sm font-semibold px-6 py-2.5 rounded-none transition-all duration-300 tracking-widest uppercase text-xs"
            >
              Cardápio
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 relative w-10 h-10 flex items-center justify-center"
            aria-label="Menu"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute left-0 h-[1.5px] bg-brand-gold transition-all duration-300 ${
                  open ? "top-2 w-6 rotate-45" : "top-0 w-6"
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-[1.5px] bg-brand-gold transition-all duration-300 ${
                  open ? "opacity-0 w-0" : "opacity-100 w-4"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] bg-brand-gold transition-all duration-300 ${
                  open ? "top-2 w-6 -rotate-45" : "top-4 w-5"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-6 pt-2 border-t border-brand-gold/10">
            <div className="flex flex-col gap-1 mt-4">
              {[
                { href: "/", label: "Início" },
                { href: "/#sobre", label: "Sobre Nós" },
                { href: "/#populares", label: "Populares" },
                { href: "/#galeria", label: "Galeria" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-white/70 hover:text-brand-gold text-sm font-body px-3 py-3 transition-colors border-b border-white/5"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/cardapio"
                onClick={() => setOpen(false)}
                className="mt-4 bg-brand-gold text-brand-dark text-xs font-bold px-6 py-3 text-center tracking-widest uppercase transition-colors hover:bg-brand-amber"
              >
                Ver Cardápio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
