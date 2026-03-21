"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section id="sobre" className="relative py-24 md:py-36 bg-brand-cream overflow-hidden">
      {/* Decorative kanji */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 kanji-watermark text-brand-dark select-none">
        物語
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image with decorative elements */}
          <ScrollReveal variant="fade-left" className="flex-1 flex justify-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=700&h=900&fit=crop&q=85"
                alt="Interior do restaurante CraftFood"
                width={480}
                height={640}
                className="w-full max-w-[480px] object-cover shadow-2xl shadow-black/15"
              />
              {/* Overlapping accent card */}
              <div className="absolute -bottom-8 -right-8 bg-brand-charcoal text-white p-8 shadow-xl max-w-[200px]">
                <p className="font-heading text-4xl text-brand-gold">10+</p>
                <p className="font-body text-xs text-white/60 tracking-wider uppercase mt-1">
                  Anos de tradição
                </p>
              </div>
              {/* Gold line accent */}
              <div className="absolute -left-6 top-12 w-12 h-[1px] bg-brand-gold" />
              <div className="absolute -left-6 top-16 w-8 h-[1px] bg-brand-gold/50" />
            </div>
          </ScrollReveal>

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <ScrollReveal variant="fade-right">
              <div className="jp-divider lg:justify-start mb-6">
                <span className="text-brand-gold font-accent text-sm tracking-[0.3em] uppercase">
                  Nossa História
                </span>
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-brand-dark leading-[1.1]">
                Tradição e sabor
                <br />
                <span className="text-brand-gold italic">em cada detalhe</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-right" delay={150}>
              <p className="mt-8 text-brand-dark/60 font-body leading-[1.8] text-base">
                Desde 2015, o CraftFood une a arte da culinária japonesa com
                ingredientes locais cuidadosamente selecionados. Nossos chefs trazem
                décadas de experiência de Tóquio e São Paulo para criar pratos que
                honram a tradição e surpreendem o paladar.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-right" delay={300}>
              <p className="mt-5 text-brand-dark/60 font-body leading-[1.8] text-base">
                Cada prato é preparado com técnica, cuidado e respeito pelas
                receitas que atravessam gerações. Aqui, a comida é uma experiência
                completa para todos os sentidos.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={450}>
              <div className="mt-10 flex flex-wrap gap-8 justify-center lg:justify-start">
                {[
                  { number: "20+", label: "Pratos no menu" },
                  { number: "4", label: "Chefs especialistas" },
                  { number: "5★", label: "Avaliação média" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-heading text-3xl text-brand-charcoal">
                      {stat.number}
                    </p>
                    <p className="font-body text-[11px] text-brand-muted tracking-wider uppercase mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
