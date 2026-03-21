"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const hours = [
  { day: "Segunda a Quinta", time: "11h30 — 22h00" },
  { day: "Sexta e Sábado", time: "11h30 — 23h30" },
  { day: "Domingo e Feriados", time: "12h00 — 21h00" },
];

const events = [
  {
    title: "Noite do Saquê",
    desc: "Degustação de saquês artesanais com harmonização de sushis especiais.",
    when: "Toda sexta-feira",
    icon: "🍶",
  },
  {
    title: "Sushi Festival",
    desc: "Rodízio completo de sushis, sashimis e pratos quentes por um preço único.",
    when: "Primeiro sábado do mês",
    icon: "🍣",
  },
  {
    title: "Happy Hour Oriental",
    desc: "Porções selecionadas e drinks com 30% de desconto das 17h às 19h.",
    when: "Segunda a quinta",
    icon: "🥢",
  },
  {
    title: "Brunch Japonês",
    desc: "Menu especial com onigiris, tamagoyakis e chá verde artesanal.",
    when: "Domingos — 10h às 13h",
    icon: "🍵",
  },
];

export default function Agenda() {
  return (
    <section id="agenda" className="relative py-24 md:py-36 bg-brand-charcoal overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&h=1080&fit=crop&q=60"
          alt=""
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-brand-charcoal/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <div className="text-center mb-20">
            <div className="jp-divider mb-6">
              <span className="text-brand-gold font-accent text-sm tracking-[0.3em] uppercase">
                Visite-nos
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-white leading-tight">
              Horários & <span className="text-brand-gold italic">Eventos</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Hours */}
          <ScrollReveal variant="fade-left">
            <div>
              <h3 className="font-heading text-xl text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-brand-gold" />
                Horário de Funcionamento
              </h3>

              <div className="space-y-0">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center py-5 border-b border-white/[0.06]"
                  >
                    <span className="font-body text-white/60">{h.day}</span>
                    <span className="font-heading text-lg text-brand-gold">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-white/[0.03] border border-white/[0.06] p-7">
                <p className="font-body text-sm text-white/50 leading-[1.8]">
                  Aceitamos reservas para grupos de 6 ou mais pessoas. Entre em
                  contato pelo telefone{" "}
                  <span className="font-semibold text-brand-gold">
                    (11) 3000-1234
                  </span>{" "}
                  ou visite-nos diretamente.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Events */}
          <div>
            <ScrollReveal variant="fade-right">
              <h3 className="font-heading text-xl text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-brand-gold" />
                Eventos Especiais
              </h3>
            </ScrollReveal>

            <div className="space-y-4">
              {events.map((e, i) => (
                <ScrollReveal key={e.title} variant="fade-right" delay={i * 100}>
                  <div className="group bg-white/[0.03] border border-white/[0.06] p-6 hover:bg-white/[0.06] hover:border-brand-gold/20 transition-all duration-500 relative overflow-hidden">
                    {/* Left accent */}
                    <div className="absolute left-0 top-0 w-[2px] h-full bg-brand-gold/0 group-hover:bg-brand-gold transition-colors duration-500" />

                    <div className="flex items-start gap-4">
                      <span className="text-2xl">{e.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-body font-semibold text-white group-hover:text-brand-gold transition-colors duration-300">
                          {e.title}
                        </h4>
                        <p className="mt-1.5 text-sm text-white/40 font-body leading-relaxed">
                          {e.desc}
                        </p>
                        <p className="mt-3 text-[11px] font-medium text-brand-gold/70 uppercase tracking-[0.15em] font-body">
                          {e.when}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
