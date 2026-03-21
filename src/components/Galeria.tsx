"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const row1 = [
  {
    src: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=500&h=600&fit=crop&q=80",
    alt: "Sushi sendo preparado pelo chef",
  },
  {
    src: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=700&h=600&fit=crop&q=80",
    alt: "Prato de sashimi premium",
  },
  {
    src: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&h=600&fit=crop&q=80",
    alt: "Chef preparando ramen",
  },
];

const row2 = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&h=500&fit=crop&q=80",
    alt: "Ambiente do restaurante à noite",
  },
  {
    src: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=500&h=500&fit=crop&q=80",
    alt: "Detalhes de temaki",
  },
  {
    src: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=700&h=500&fit=crop&q=80",
    alt: "Gyoza grelhado",
  },
];

function GalleryImage({ src, alt, delay, height }: { src: string; alt: string; delay: number; height: string }) {
  return (
    <ScrollReveal variant="scale-up" delay={delay}>
      <div className={`relative w-full overflow-hidden group cursor-pointer ${height}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-cover transition-all duration-[1.5s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/40 transition-colors duration-500" />
        <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-white font-body text-sm font-light tracking-wide">
            {alt}
          </p>
        </div>
        <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-brand-gold/0 group-hover:border-brand-gold/70 transition-all duration-500" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-brand-gold/0 group-hover:border-brand-gold/70 transition-all duration-500" />
      </div>
    </ScrollReveal>
  );
}

export default function Galeria() {
  return (
    <section id="galeria" className="relative py-24 md:py-36 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <div className="text-center mb-20">
            <div className="jp-divider mb-6">
              <span className="text-brand-gold font-accent text-sm tracking-[0.3em] uppercase">
                Momentos
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-brand-dark leading-tight">
              Nossa <span className="text-brand-gold italic">Galeria</span>
            </h2>
            <p className="mt-5 text-brand-muted font-body max-w-lg mx-auto">
              Cada prato é uma obra de arte. Veja o cuidado e a paixão
              que colocamos em cada detalhe.
            </p>
          </div>
        </ScrollReveal>

        {/* Row 1: 3 tall images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {row1.map((photo, i) => (
            <GalleryImage
              key={photo.alt}
              src={photo.src}
              alt={photo.alt}
              delay={i * 100}
              height="h-[280px] md:h-[360px]"
            />
          ))}
        </div>

        {/* Row 2: 3 wider images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-3 md:mt-4">
          {row2.map((photo, i) => (
            <GalleryImage
              key={photo.alt}
              src={photo.src}
              alt={photo.alt}
              delay={i * 100 + 300}
              height="h-[220px] md:h-[280px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
