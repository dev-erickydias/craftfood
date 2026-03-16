"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Header() {
  return (
    <section className="relative bg-brand-dark pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <ScrollReveal variant="fade-right">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Culinária
              <br />
              <span className="text-brand-gold">Oriental</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="fade-right" delay={200}>
            <p className="mt-5 text-white/70 font-body text-base sm:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
              A culinária japonesa é equilibrada, rica em peixes, vegetais, massas
              e ingredientes frescos, preparados com técnicas milenares.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={400}>
            <Link
              href="/cardapio"
              className="inline-block mt-8 bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-all hover:scale-105 animate-pulse-glow"
            >
              Ver o Cardápio
            </Link>
          </ScrollReveal>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <ScrollReveal variant="scale-up" delay={300}>
            <Image
              src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&h=600&fit=crop"
              alt="Prato de sushi artesanal"
              width={384}
              height={384}
              className="w-72 sm:w-80 md:w-96 rounded-full shadow-2xl shadow-black/40 animate-float ring-4 ring-brand-gold/30"
              priority
            />
          </ScrollReveal>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full text-brand-cream fill-current">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,30 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
