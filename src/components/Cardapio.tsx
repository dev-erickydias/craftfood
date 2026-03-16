"use client";

import ScrollReveal from "./ScrollReveal";

const categories = [
  {
    name: "Entradas",
    items: [
      { name: "Edamame", desc: "Vagem de soja cozida no vapor com sal marinho", price: "R$ 18" },
      { name: "Gyoza (6 un.)", desc: "Pastéis japoneses grelhados recheados com carne suína e legumes", price: "R$ 28" },
      { name: "Sunomono", desc: "Salada agridoce de pepino japonês com gergelim", price: "R$ 16" },
      { name: "Tempurá Misto", desc: "Camarão e vegetais empanados em massa leve e crocante", price: "R$ 38" },
    ],
  },
  {
    name: "Sushis & Sashimis",
    items: [
      { name: "Combinado Clássico", desc: "10 peças variadas de sushi com salmão, atum e peixe branco", price: "R$ 52" },
      { name: "Sashimi Premium", desc: "15 fatias de salmão, atum e peixe branco", price: "R$ 68" },
      { name: "Hot Roll (8 un.)", desc: "Uramaki empanado e frito com cream cheese e salmão", price: "R$ 36" },
      { name: "Niguiri de Salmão (5 un.)", desc: "Arroz moldado coberto com fatia de salmão fresco", price: "R$ 32" },
    ],
  },
  {
    name: "Pratos Principais",
    items: [
      { name: "Ramen Tonkotsu", desc: "Caldo de porco com chashu, ovo marinado, nori e cebolinha", price: "R$ 42" },
      { name: "Yakissoba Especial", desc: "Macarrão salteado com legumes, frango e camarão", price: "R$ 38" },
      { name: "Donburi de Salmão", desc: "Tigela de arroz com salmão grelhado, abacate e molho teriyaki", price: "R$ 46" },
    ],
  },
  {
    name: "Sobremesas",
    items: [
      { name: "Mochi Ice Cream (3 un.)", desc: "Bolinho de arroz glutinoso recheado com sorvete artesanal", price: "R$ 24" },
      { name: "Dorayaki", desc: "Panqueca japonesa recheada com pasta doce de feijão azuki", price: "R$ 18" },
      { name: "Tempurá de Banana", desc: "Banana empanada com calda de chocolate e gergelim", price: "R$ 20" },
    ],
  },
  {
    name: "Bebidas",
    items: [
      { name: "Saquê Quente", desc: "Saquê tradicional servido quente — 180ml", price: "R$ 22" },
      { name: "Chá Verde Gelado", desc: "Chá verde japonês sencha servido com gelo e hortelã", price: "R$ 12" },
      { name: "Ramune", desc: "Refrigerante japonês tradicional com bolinha de vidro", price: "R$ 16" },
      { name: "Suco de Lichia", desc: "Suco natural de lichia com toque de limão", price: "R$ 14" },
    ],
  },
];

export default function Cardapio() {
  return (
    <section className="pt-24 pb-16 md:pb-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <div className="text-center mb-14">
            <p className="text-brand-red font-semibold text-sm uppercase tracking-widest font-body">
              Nosso Menu
            </p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl text-brand-dark">
              Cardápio Completo
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-14">
          {categories.map((cat, catIdx) => (
            <div key={cat.name}>
              <ScrollReveal variant="fade-up" delay={catIdx * 50}>
                <h3 className="font-heading text-2xl text-brand-dark border-b-2 border-brand-gold pb-2 mb-6">
                  {cat.name}
                </h3>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.items.map((item, i) => (
                  <ScrollReveal key={item.name} variant="fade-up" delay={i * 80}>
                    <div className="bg-white rounded-xl p-5 flex justify-between items-start gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                      <div className="flex-1">
                        <h4 className="font-body font-semibold text-brand-dark">
                          {item.name}
                        </h4>
                        <p className="mt-1 text-sm text-brand-dark/60 font-body leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      <span className="text-brand-red font-bold font-body whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
