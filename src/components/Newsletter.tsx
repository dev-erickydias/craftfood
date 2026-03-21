"use client";

import ScrollReveal from "./ScrollReveal";

export default function Newsletter() {
  return (
    <section className="relative py-24 md:py-32 bg-brand-cream overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 50%, #c9a96e 1px, transparent 1px),
                           radial-gradient(circle at 75% 50%, #c9a96e 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal variant="scale-up">
          <div className="bg-brand-charcoal p-12 sm:p-16 md:p-20 relative">
            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-brand-gold/30" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-brand-gold/30" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-brand-gold/30" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-brand-gold/30" />

            <p className="text-brand-gold font-accent text-sm tracking-[0.4em] uppercase mb-4">
              Fique por dentro
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Receba novidades e<br />
              <span className="text-brand-gold italic">ofertas exclusivas</span>
            </h2>
            <p className="mt-6 text-white/40 font-body max-w-md mx-auto leading-relaxed">
              Inscreva-se para receber informações sobre eventos especiais,
              novos pratos e promoções exclusivas.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 bg-white/[0.05] border border-white/10 text-white placeholder-white/30 px-6 py-4 font-body text-sm focus:outline-none focus:border-brand-gold/50 transition-colors"
              />
              <button className="bg-brand-gold text-brand-dark font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-brand-amber transition-colors duration-300 whitespace-nowrap">
                Inscrever-se
              </button>
            </div>

            <p className="mt-4 text-white/20 font-body text-[11px]">
              Sem spam. Cancele quando quiser.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
