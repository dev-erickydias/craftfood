"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <ScrollReveal variant="fade-up">
            <div>
              <Image
                src="/logo.svg"
                alt="CraftFood"
                width={120}
                height={32}
                className="h-8 w-auto mb-5"
              />
              <p className="text-white/40 text-sm font-body leading-[1.8]">
                Culinária oriental artesanal com ingredientes frescos e técnicas
                tradicionais japonesas desde 2015.
              </p>
              {/* Social */}
              <div className="flex gap-5 mt-6">
                {["facebook", "instagram", "twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    aria-label={social}
                    className="w-9 h-9 border border-white/10 hover:border-brand-gold/40 flex items-center justify-center transition-all duration-300 group"
                  >
                    <Image
                      src={`/${social}.svg`}
                      alt=""
                      width={14}
                      height={14}
                      className="opacity-40 group-hover:opacity-80 transition-opacity"
                    />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Navigation */}
          <ScrollReveal variant="fade-up" delay={100}>
            <div>
              <h4 className="font-body font-medium text-xs mb-5 uppercase tracking-[0.2em] text-brand-gold/70">
                Navegação
              </h4>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Início" },
                  { href: "/#sobre", label: "Sobre Nós" },
                  { href: "/#populares", label: "Populares" },
                  { href: "/cardapio", label: "Cardápio" },
                  { href: "/#galeria", label: "Galeria" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-brand-gold text-sm font-body transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal variant="fade-up" delay={200}>
            <div>
              <h4 className="font-body font-medium text-xs mb-5 uppercase tracking-[0.2em] text-brand-gold/70">
                Contato
              </h4>
              <ul className="space-y-3 text-white/40 text-sm font-body">
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-brand-gold/50 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Av. Sakura, 1200<br />Vila Nihon — São Paulo, SP</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-brand-gold/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(11) 3000-1234</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-brand-gold/50 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contato@craftfood.com.br</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Hours */}
          <ScrollReveal variant="fade-up" delay={300}>
            <div>
              <h4 className="font-body font-medium text-xs mb-5 uppercase tracking-[0.2em] text-brand-gold/70">
                Horários
              </h4>
              <ul className="space-y-3 text-sm font-body">
                {[
                  { day: "Seg — Qui", time: "11h30 — 22h" },
                  { day: "Sex — Sáb", time: "11h30 — 23h30" },
                  { day: "Dom & Feriados", time: "12h — 21h" },
                ].map((h) => (
                  <li key={h.day} className="flex justify-between">
                    <span className="text-white/40">{h.day}</span>
                    <span className="text-white/60 font-medium">{h.time}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-white/5">
                <Link
                  href="/cardapio"
                  className="text-brand-gold text-xs font-medium tracking-[0.15em] uppercase hover:text-brand-amber transition-colors"
                >
                  Fazer reserva →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs font-body">
            &copy; {new Date().getFullYear()} CraftFood. Todos os direitos reservados.
          </p>
          <p className="text-white/15 text-[10px] font-body tracking-wider">
            Feito com paixão em São Paulo
          </p>
        </div>
      </div>
    </footer>
  );
}
