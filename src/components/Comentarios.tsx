"use client";

import ScrollReveal from "./ScrollReveal";

const reviews = [
  {
    name: "Fernanda Lopes",
    initials: "FL",
    role: "Food Critic",
    stars: 5,
    text: "Melhor restaurante japonês da cidade! O ramen é simplesmente perfeito, com caldo rico e ingredientes fresquíssimos. Uma experiência que transcende a gastronomia.",
  },
  {
    name: "Rafael Mendes",
    initials: "RM",
    role: "Sommelier",
    stars: 5,
    text: "Ambiente incrível e atendimento impecável. Os sushis são preparados na hora e o salmão derrete na boca. A carta de saquês é extraordinária.",
  },
  {
    name: "Camila Duarte",
    initials: "CD",
    role: "Gastrônoma",
    stars: 5,
    text: "Adorei a experiência! O cardápio é variado e os preços são justos pela qualidade excepcional dos pratos. O omakase é imperdível.",
  },
  {
    name: "Lucas Tanaka",
    initials: "LT",
    role: "Chef Amador",
    stars: 5,
    text: "Como neto de japoneses, posso dizer que o CraftFood honra verdadeiramente a tradição. Os sabores me transportam diretamente para Tóquio.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? "text-brand-gold" : "text-white/10"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Comentarios() {
  return (
    <section className="relative py-24 md:py-36 bg-brand-warmblack overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(201, 169, 110, 0.5) 35px,
            rgba(201, 169, 110, 0.5) 36px
          )`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <div className="text-center mb-20">
            <div className="jp-divider mb-6">
              <span className="text-brand-gold font-accent text-sm tracking-[0.3em] uppercase">
                Depoimentos
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-white leading-tight">
              O que dizem <span className="text-brand-gold italic">nossos clientes</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <ScrollReveal key={r.name} variant="fade-up" delay={i * 120}>
              <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] p-7 hover:bg-white/[0.06] hover:border-brand-gold/20 transition-all duration-500 group h-full">
                <Stars count={r.stars} />

                <p className="mt-5 text-white/50 font-body text-sm leading-[1.8] group-hover:text-white/70 transition-colors duration-500">
                  &ldquo;{r.text}&rdquo;
                </p>

                <div className="mt-7 flex items-center gap-4 pt-5 border-t border-white/[0.06]">
                  <div className="w-11 h-11 flex items-center justify-center border border-brand-gold/30 text-brand-gold font-heading text-sm">
                    {r.initials}
                  </div>
                  <div>
                    <p className="font-body font-medium text-sm text-white/90">
                      {r.name}
                    </p>
                    <p className="font-body text-[11px] text-brand-gold/60 tracking-wider uppercase">
                      {r.role}
                    </p>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-brand-gold/0 group-hover:border-brand-gold/30 transition-all duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
