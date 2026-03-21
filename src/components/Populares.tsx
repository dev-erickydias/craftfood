"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const dishes = [
  {
    name: "Ramen de Frango",
    description:
      "Caldo encorpado com macarrão artesanal, frango desfiado, ovo marinado e cebolinha.",
    price: "R$ 30",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=1000&fit=crop",
    tag: "Mais Pedido",
  },
  {
    name: "Ramen Apimentado",
    description:
      "Caldo picante com tofu crocante, broto de feijão, gergelim e pimenta shichimi.",
    price: "R$ 50",
    image:
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&h=1000&fit=crop",
    tag: "Chef's Choice",
  },
  {
    name: "Ramen Tradicional",
    description:
      "Receita clássica com caldo de porco tonkotsu, chashu, nori e ovo ajitsuke.",
    price: "R$ 30",
    image:
      "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&h=1000&fit=crop",
    tag: "Clássico",
  },
];

export default function Populares() {
  return (
    <section id="populares" className="relative py-24 md:py-36 bg-brand-charcoal overflow-hidden">
      {/* Background kanji */}
      <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 kanji-watermark text-white select-none">
        人気
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <div className="text-center mb-20">
            <div className="jp-divider mb-6">
              <span className="text-brand-gold font-accent text-sm tracking-[0.3em] uppercase">
                Favoritos da Casa
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Pratos <span className="text-brand-gold italic">Populares</span>
            </h2>
            <p className="mt-5 text-white/40 font-body max-w-lg mx-auto leading-relaxed">
              Os pratos mais amados pelos nossos clientes, preparados com
              ingredientes frescos todos os dias.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {dishes.map((dish, i) => (
            <ScrollReveal key={dish.name} variant="fade-up" delay={i * 200}>
              <Link href="/cardapio" className="group block relative">
                <div className="relative overflow-hidden bg-brand-dark card-line">
                  {/* Tag */}
                  <div className="absolute top-5 left-5 z-10">
                    <span className="bg-brand-gold/90 text-brand-dark text-[10px] font-bold font-body uppercase tracking-[0.2em] px-4 py-1.5 backdrop-blur-sm">
                      {dish.tag}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="absolute top-5 right-5 z-10">
                    <span className="font-heading text-2xl text-white drop-shadow-lg">
                      {dish.price}
                    </span>
                  </div>

                  {/* Image with tall ratio */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
                    />
                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-700" />
                  </div>

                  {/* Content overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="font-heading text-2xl text-white group-hover:text-brand-gold transition-colors duration-300">
                      {dish.name}
                    </h3>
                    <p className="mt-3 text-white/50 text-sm font-body leading-relaxed line-clamp-2">
                      {dish.description}
                    </p>
                    <div className="mt-5 flex items-center gap-3 text-brand-gold text-xs font-body font-medium tracking-[0.15em] uppercase">
                      <span>Ver detalhes</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
