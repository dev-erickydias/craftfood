"use client";

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
  },
  {
    title: "Sushi Festival",
    desc: "Rodízio completo de sushis, sashimis e pratos quentes por um preço único.",
    when: "Primeiro sábado do mês",
  },
  {
    title: "Happy Hour Oriental",
    desc: "Porções selecionadas e drinks com 30% de desconto das 17h às 19h.",
    when: "Segunda a quinta",
  },
  {
    title: "Brunch Japonês",
    desc: "Menu especial com onigiris, tamagoyakis e chá verde artesanal.",
    when: "Domingos — 10h às 13h",
  },
];

export default function Agenda() {
  return (
    <section id="agenda" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <div className="text-center mb-14">
            <p className="text-brand-red font-semibold text-sm uppercase tracking-widest font-body">
              Visite-nos
            </p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl text-brand-dark">
              Horários & Eventos
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Horários */}
          <ScrollReveal variant="fade-left">
            <div>
              <h3 className="font-heading text-xl text-brand-dark mb-6">
                Horário de Funcionamento
              </h3>
              <div className="space-y-4">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center border-b border-dashed border-brand-dark/20 pb-3"
                  >
                    <span className="font-body text-brand-dark">{h.day}</span>
                    <span className="font-body font-semibold text-brand-dark">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-brand-cream rounded-xl p-5">
                <p className="font-body text-sm text-brand-dark/70 leading-relaxed">
                  Aceitamos reservas para grupos de 6 ou mais pessoas. Entre em
                  contato pelo telefone{" "}
                  <span className="font-semibold text-brand-dark">
                    (11) 3000-1234
                  </span>{" "}
                  ou visite-nos diretamente.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Eventos */}
          <div>
            <ScrollReveal variant="fade-right">
              <h3 className="font-heading text-xl text-brand-dark mb-6">
                Eventos Especiais
              </h3>
            </ScrollReveal>
            <div className="space-y-4">
              {events.map((e, i) => (
                <ScrollReveal key={e.title} variant="fade-right" delay={i * 100}>
                  <div className="bg-brand-cream rounded-xl p-5 border-l-4 border-brand-red hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <h4 className="font-body font-semibold text-brand-dark">
                      {e.title}
                    </h4>
                    <p className="mt-1 text-sm text-brand-dark/60 font-body">
                      {e.desc}
                    </p>
                    <p className="mt-2 text-xs font-semibold text-brand-red uppercase tracking-wide font-body">
                      {e.when}
                    </p>
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
