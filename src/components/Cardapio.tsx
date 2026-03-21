"use client";

import ScrollReveal from "./ScrollReveal";

const categories = [
  {
    name: "Entradas",
    kanji: "前菜",
    items: [
      { name: "Edamame", desc: "Vagem de soja cozida no vapor com sal marinho", price: "R$ 18" },
      { name: "Gyoza (6 un.)", desc: "Pastéis japoneses grelhados recheados com carne suína e legumes", price: "R$ 28" },
      { name: "Sunomono", desc: "Salada agridoce de pepino japonês com gergelim", price: "R$ 16" },
      { name: "Tempurá Misto", desc: "Camarão e vegetais empanados em massa leve e crocante", price: "R$ 38" },
    ],
  },
  {
    name: "Sushis & Sashimis",
    kanji: "寿司",
    items: [
      { name: "Combinado Clássico", desc: "10 peças variadas de sushi com salmão, atum e peixe branco", price: "R$ 52" },
      { name: "Sashimi Premium", desc: "15 fatias de salmão, atum e peixe branco", price: "R$ 68" },
      { name: "Hot Roll (8 un.)", desc: "Uramaki empanado e frito com cream cheese e salmão", price: "R$ 36" },
      { name: "Niguiri de Salmão (5 un.)", desc: "Arroz moldado coberto com fatia de salmão fresco", price: "R$ 32" },
    ],
  },
  {
    name: "Pratos Principais",
    kanji: "主菜",
    items: [
      { name: "Ramen Tonkotsu", desc: "Caldo de porco com chashu, ovo marinado, nori e cebolinha", price: "R$ 42" },
      { name: "Yakissoba Especial", desc: "Macarrão salteado com legumes, frango e camarão", price: "R$ 38" },
      { name: "Donburi de Salmão", desc: "Tigela de arroz com salmão grelhado, abacate e molho teriyaki", price: "R$ 46" },
    ],
  },
  {
    name: "Sobremesas",
    kanji: "甘味",
    items: [
      { name: "Mochi Ice Cream (3 un.)", desc: "Bolinho de arroz glutinoso recheado com sorvete artesanal", price: "R$ 24" },
      { name: "Dorayaki", desc: "Panqueca japonesa recheada com pasta doce de feijão azuki", price: "R$ 18" },
      { name: "Tempurá de Banana", desc: "Banana empanada com calda de chocolate e gergelim", price: "R$ 20" },
    ],
  },
  {
    name: "Bebidas",
    kanji: "飲物",
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
    <section className="pt-28 pb-24 md:pb-36 bg-brand-cream relative overflow-hidden">
      {/* Kanji watermark */}
      <div className="absolute right-0 top-32 translate-x-1/3 kanji-watermark text-brand-dark select-none">
        品書
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal variant="fade-up">
          <div className="text-center mb-20">
            <div className="jp-divider mb-6">
              <span className="text-brand-gold font-accent text-sm tracking-[0.3em] uppercase">
                Nosso Menu
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-brand-dark">
              Cardápio <span className="text-brand-gold italic">Completo</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-16">
          {categories.map((cat, catIdx) => (
            <div key={cat.name}>
              <ScrollReveal variant="fade-up" delay={catIdx * 50}>
                <div className="flex items-center gap-5 mb-8">
                  <span className="font-accent text-brand-gold/20 text-4xl leading-none">
                    {cat.kanji}
                  </span>
                  <div>
                    <h3 className="font-heading text-2xl text-brand-dark">
                      {cat.name}
                    </h3>
                    <div className="mt-1 h-[1px] w-16 bg-gradient-to-r from-brand-gold to-transparent" />
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.items.map((item, i) => (
                  <ScrollReveal key={item.name} variant="fade-up" delay={i * 60}>
                    <div className="group steam-card bg-white p-6 flex justify-between items-start gap-6 border border-transparent hover:border-brand-gold/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-400 relative overflow-visible">
                      {/* Steam particles */}
                      <span className="steam-particle" />
                      <span className="steam-particle" />
                      <span className="steam-particle" />
                      <span className="steam-particle" />
                      <span className="steam-particle" />
                      {/* Hover line */}
                      <div className="absolute left-0 top-0 w-[2px] h-0 bg-brand-gold group-hover:h-full transition-all duration-500" />
                      <div className="flex-1 pl-1">
                        <h4 className="font-body font-semibold text-brand-dark group-hover:text-brand-charcoal transition-colors">
                          {item.name}
                        </h4>
                        <p className="mt-1.5 text-sm text-brand-muted font-body leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      {/* Dotted line to price */}
                      <div className="flex items-center gap-3 shrink-0 self-center">
                        <div className="w-12 border-b border-dotted border-brand-dark/15 hidden sm:block" />
                        <span className="text-brand-red font-heading text-lg">
                          {item.price}
                        </span>
                      </div>
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
