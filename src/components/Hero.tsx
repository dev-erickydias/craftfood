"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <ScrollReveal variant="fade-left" className="flex-1 flex justify-center">
          <Image
            src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=700&h=500&fit=crop"
            alt="Interior do restaurante CraftFood"
            width={448}
            height={320}
            className="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </ScrollReveal>

        <div className="flex-1 text-center md:text-left">
          <ScrollReveal variant="fade-right">
            <p className="text-brand-red font-semibold text-sm uppercase tracking-widest font-body">
              Nossa História
            </p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl text-brand-dark leading-tight">
              Tradição e sabor em cada detalhe
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-right" delay={150}>
            <p className="mt-5 text-brand-dark/70 font-body leading-relaxed">
              Desde 2015, o CraftFood une a arte da culinária japonesa com
              ingredientes locais selecionados. Nossos chefs trazem décadas de
              experiência de Tóquio e São Paulo para criar pratos que honram a
              tradição e surpreendem o paladar.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="fade-right" delay={300}>
            <p className="mt-4 text-brand-dark/70 font-body leading-relaxed">
              Cada prato é preparado com técnica, cuidado e respeito pelas
              receitas que atravessam gerações. Aqui, a comida é uma experiência
              completa para todos os sentidos.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
