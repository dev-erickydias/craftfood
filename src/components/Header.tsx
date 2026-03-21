"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Header() {
  return (
    <section className="relative bg-brand-warmblack min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=1920&h=1080&fit=crop&q=80"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/40 to-brand-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-transparent to-brand-dark/50" />
      </div>

      {/* Kanji watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 kanji-watermark text-white select-none">
        職人
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <ScrollReveal variant="fade-right">
              <p className="font-accent text-brand-gold/80 text-sm tracking-[0.4em] uppercase mb-6">
                Desde 2015 — São Paulo
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-right" delay={150}>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white leading-[0.95] tracking-tight">
                Culinária
                <br />
                <span className="text-shimmer font-heading italic">
                  Oriental
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="fade-right" delay={300}>
              <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
                <div className="h-[1px] w-12 bg-brand-gold/40" />
                <p className="text-white/50 font-body text-base sm:text-lg max-w-sm leading-relaxed font-light">
                  A arte milenar da gastronomia japonesa,
                  reinventada com ingredientes selecionados.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={500}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center md:items-start">
                <Link
                  href="/cardapio"
                  className="group relative bg-brand-gold text-brand-dark font-bold px-10 py-4 text-xs tracking-[0.25em] uppercase transition-all duration-500 hover:bg-brand-amber animate-pulse-glow"
                >
                  Explorar Cardápio
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-dark/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
                <Link
                  href="/#sobre"
                  className="text-white/50 hover:text-brand-gold text-xs tracking-[0.2em] uppercase font-body transition-colors duration-300 py-4 px-6 border border-white/10 hover:border-brand-gold/30"
                >
                  Nossa História
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Featured Image */}
          <div className="flex-1 flex justify-center">
            <ScrollReveal variant="blur-in" delay={400}>
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-brand-gold/20 -rotate-3" />
                <div className="absolute -inset-4 border border-brand-gold/10 rotate-2" />
                <Image
                  src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=600&fit=crop&q=85"
                  alt="Prato de sushi artesanal"
                  width={420}
                  height={420}
                  className="w-72 sm:w-80 md:w-[420px] aspect-square object-cover shadow-2xl shadow-black/60 animate-float"
                  priority
                />
                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-brand-gold/50" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-brand-gold/50" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-body">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-brand-gold/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
