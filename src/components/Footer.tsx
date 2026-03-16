"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <ScrollReveal variant="fade-up">
            <div>
              <Image src="/logo.svg" alt="CraftFood" width={120} height={32} className="h-8 w-auto mb-4" />
              <p className="text-white/60 text-sm font-body leading-relaxed">
                Culinária oriental artesanal com ingredientes frescos e técnicas
                tradicionais japonesas.
              </p>
            </div>
          </ScrollReveal>

          {/* Links */}
          <ScrollReveal variant="fade-up" delay={100}>
            <div>
              <h4 className="font-body font-semibold text-sm mb-4 uppercase tracking-wider text-white/80">
                Navegação
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-white/60 hover:text-white text-sm font-body transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="/#sobre" className="text-white/60 hover:text-white text-sm font-body transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/cardapio" className="text-white/60 hover:text-white text-sm font-body transition-colors">
                    Cardápio
                  </Link>
                </li>
                <li>
                  <Link href="/cardapio#agenda" className="text-white/60 hover:text-white text-sm font-body transition-colors">
                    Horários
                  </Link>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal variant="fade-up" delay={200}>
            <div>
              <h4 className="font-body font-semibold text-sm mb-4 uppercase tracking-wider text-white/80">
                Contato
              </h4>
              <ul className="space-y-2 text-white/60 text-sm font-body">
                <li>Av. Sakura, 1200</li>
                <li>Vila Nihon — São Paulo, SP</li>
                <li>(11) 3000-1234</li>
                <li>contato@craftfood.exemplo.br</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Social */}
          <ScrollReveal variant="fade-up" delay={300}>
            <div>
              <h4 className="font-body font-semibold text-sm mb-4 uppercase tracking-wider text-white/80">
                Redes Sociais
              </h4>
              <div className="flex gap-4">
                <a href="#" aria-label="Facebook" className="text-white/60 hover:text-white transition-colors">
                  <Image src="/facebook.svg" alt="" width={20} height={20} className="opacity-60 hover:opacity-100 transition-opacity" />
                </a>
                <a href="#" aria-label="Instagram" className="text-white/60 hover:text-white transition-colors">
                  <Image src="/instagram.svg" alt="" width={20} height={20} className="opacity-60 hover:opacity-100 transition-opacity" />
                </a>
                <a href="#" aria-label="Twitter" className="text-white/60 hover:text-white transition-colors">
                  <Image src="/twitter.svg" alt="" width={20} height={20} className="opacity-60 hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-xs font-body">
            &copy; {new Date().getFullYear()} CraftFood. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
