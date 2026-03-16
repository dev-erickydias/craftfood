"use client";

import ScrollReveal from "./ScrollReveal";

const reviews = [
  {
    name: "Fernanda Lopes",
    initials: "FL",
    stars: 5,
    text: "Melhor restaurante japonês da cidade! O ramen é simplesmente perfeito, com caldo rico e ingredientes fresquíssimos.",
  },
  {
    name: "Rafael Mendes",
    initials: "RM",
    stars: 5,
    text: "Ambiente incrível e atendimento impecável. Os sushis são preparados na hora e o salmão derrete na boca.",
  },
  {
    name: "Camila Duarte",
    initials: "CD",
    stars: 4,
    text: "Adorei a experiência! O cardápio é variado e os preços são justos pela qualidade excepcional dos pratos.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-300"}`}
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
    <section className="py-16 md:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <div className="text-center mb-12">
            <p className="text-brand-red font-semibold text-sm uppercase tracking-widest font-body">
              Depoimentos
            </p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl text-brand-dark">
              O que nossos clientes dizem
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <ScrollReveal key={r.name} variant="fade-up" delay={i * 150}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-400">
                <Stars count={r.stars} />
                <p className="mt-4 text-brand-dark/70 font-body text-sm leading-relaxed italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white font-bold text-xs">
                    {r.initials}
                  </div>
                  <span className="font-body font-semibold text-sm text-brand-dark">
                    {r.name}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
