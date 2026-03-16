"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const dishes = [
  {
    name: "Ramen de Frango",
    description:
      "Caldo encorpado com macarrão artesanal, frango desfiado, ovo marinado e cebolinha.",
    price: "R$ 30",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=450&fit=crop",
    tag: "Mais Pedido",
  },
  {
    name: "Ramen Apimentado",
    description:
      "Caldo picante com tofu crocante, broto de feijão, gergelim e pimenta shichimi.",
    price: "R$ 50",
    image:
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&h=450&fit=crop",
    tag: "Chef's Choice",
  },
  {
    name: "Ramen Tradicional",
    description:
      "Receita clássica com caldo de porco tonkotsu, chashu, nori e ovo ajitsuke.",
    price: "R$ 30",
    image:
      "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&h=450&fit=crop",
    tag: "Clássico",
  },
];

export default function Populares() {
  return (
    <section id="populares" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <div className="text-center mb-14">
            <p className="text-brand-red font-semibold text-sm uppercase tracking-widest font-body">
              Favoritos da Casa
            </p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl text-brand-dark">
              Pratos Populares
            </h2>
            <p className="mt-3 text-brand-dark/50 font-body max-w-lg mx-auto">
              Os pratos mais amados pelos nossos clientes, preparados com
              ingredientes frescos todos os dias.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, i) => (
            <ScrollReveal key={dish.name} variant="scale-up" delay={i * 150}>
              <div className="group relative bg-brand-cream rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Tag badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-brand-red text-white text-xs font-bold font-body uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                    {dish.tag}
                  </span>
                </div>

                {/* Price floating on the image */}
                <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-sm text-brand-red font-bold font-body text-lg px-4 py-1.5 rounded-full shadow-lg">
                  {dish.price}
                </div>

                {/* Image — 16:9 aspect ratio */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  {/* Name overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-heading text-xl text-white drop-shadow-lg group-hover:translate-x-1 transition-transform duration-300">
                      {dish.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-brand-dark/60 text-sm font-body leading-relaxed">
                    {dish.description}
                  </p>

                  {/* CTA link */}
                  <div className="mt-4 flex items-center gap-2 text-brand-red font-body font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    <span>Ver no cardápio</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
