"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Chef() {
  return (
    <section className="relative py-24 md:py-36 bg-brand-charcoal overflow-hidden">
      {/* Kanji watermark */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 kanji-watermark text-white select-none">
        料理人
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text side */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <ScrollReveal variant="fade-left">
              <div className="jp-divider lg:justify-start mb-6">
                <span className="text-brand-gold font-accent text-sm tracking-[0.3em] uppercase">
                  Nosso Chef
                </span>
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl text-white leading-[1.1]">
                Chef <span className="text-brand-gold italic">Takeshi Yamamoto</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-left" delay={150}>
              <p className="mt-8 text-white/50 font-body leading-[1.9] text-base">
                Com mais de 20 anos dedicados à culinária japonesa, Chef Takeshi
                treinou nos melhores restaurantes de Tóquio antes de trazer sua
                arte para São Paulo. Sua filosofia une a precisão da técnica
                tradicional com a criatividade dos sabores brasileiros.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-left" delay={300}>
              <blockquote className="mt-8 border-l-2 border-brand-gold/50 pl-6">
                <p className="text-white/70 font-heading text-lg italic leading-relaxed">
                  &ldquo;A cozinha japonesa não é apenas comida — é respeito pelo
                  ingrediente, pela técnica e por quem vai saborear.&rdquo;
                </p>
                <footer className="mt-3 text-brand-gold/70 font-body text-sm tracking-wider">
                  — Chef Takeshi
                </footer>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={450}>
              <div className="mt-10 flex gap-10 justify-center lg:justify-start">
                {[
                  { number: "20+", label: "Anos de experiência" },
                  { number: "3", label: "Estrelas Michelin" },
                  { number: "8", label: "Prêmios culinários" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-heading text-3xl text-brand-gold">{stat.number}</p>
                    <p className="font-body text-[10px] text-white/40 tracking-wider uppercase mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Image side */}
          <ScrollReveal variant="fade-right" delay={200} className="flex-1 flex justify-center order-1 lg:order-2">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&h=650&fit=crop&q=85"
                alt="Chef Takeshi Yamamoto"
                width={440}
                height={580}
                className="w-full max-w-[440px] object-cover shadow-2xl shadow-black/40"
              />
              {/* Decorative border */}
              <div className="absolute -inset-3 border border-brand-gold/15 pointer-events-none" />
              {/* Corner accents */}
              <div className="absolute -top-1 -left-1 w-10 h-10 border-t-2 border-l-2 border-brand-gold/40" />
              <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-2 border-r-2 border-brand-gold/40" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
