"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="CraftFood" width={120} height={32} className="h-8 w-auto" />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white/80 hover:text-white text-sm font-body transition-colors"
            >
              Início
            </Link>
            <Link
              href="/#sobre"
              className="text-white/80 hover:text-white text-sm font-body transition-colors"
            >
              Sobre Nós
            </Link>
            <Link
              href="/#populares"
              className="text-white/80 hover:text-white text-sm font-body transition-colors"
            >
              Populares
            </Link>
            <Link
              href="/cardapio"
              className="bg-brand-red hover:bg-red-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
            >
              Reserve já
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-white/10">
            <div className="flex flex-col gap-3 pt-4">
              <Link href="/" onClick={() => setOpen(false)} className="text-white/80 hover:text-white text-sm font-body px-2 py-1">
                Início
              </Link>
              <Link href="/#sobre" onClick={() => setOpen(false)} className="text-white/80 hover:text-white text-sm font-body px-2 py-1">
                Sobre Nós
              </Link>
              <Link href="/#populares" onClick={() => setOpen(false)} className="text-white/80 hover:text-white text-sm font-body px-2 py-1">
                Populares
              </Link>
              <Link
                href="/cardapio"
                onClick={() => setOpen(false)}
                className="bg-brand-red text-white text-sm font-semibold px-5 py-2 rounded-full text-center mt-2"
              >
                Reserve já
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
