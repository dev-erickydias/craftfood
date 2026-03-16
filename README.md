# CraftFood — Culinária Oriental Artesanal

Site institucional do restaurante fictício **CraftFood**, especializado em culinária japonesa. Construído com Next.js 14, React 18 e Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)

---

## Visão Geral

O CraftFood é um projeto front-end responsivo com foco em performance e experiência visual. Inclui animações de scroll, scrollbar customizada e imagens de alta qualidade via Unsplash.

### Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Home — Header hero, seção Sobre Nós, Pratos Populares, Depoimentos e Footer |
| `/cardapio` | Cardápio completo organizado por categorias + Horários & Eventos |

### Componentes

| Componente | Descrição |
|------------|-----------|
| `Navigation` | Navbar fixa com menu responsivo (hamburger no mobile) |
| `Header` | Hero section com título, CTA e imagem flutuante |
| `Hero` | Seção "Sobre Nós" com foto do restaurante |
| `Populares` | Grid de cards 16:9 com pratos populares (imagens Unsplash) |
| `Comentarios` | Depoimentos de clientes com estrelas |
| `Cardapio` | Menu completo dividido por categorias |
| `Agenda` | Horários de funcionamento e eventos especiais |
| `Footer` | Links, contato e redes sociais |
| `ScrollReveal` | Wrapper de animação por scroll (IntersectionObserver) |

### Funcionalidades

- **Scroll Reveal Animations** — 6 variantes (fade-up, fade-down, fade-left, fade-right, scale-up, blur-in) com delays escalonados
- **Custom Scrollbar** — Gradiente vermelho → dourado nas cores da marca
- **Imagens Unsplash** — Fotos de alta qualidade otimizadas via `next/image`
- **Responsivo** — Layout adaptável para mobile, tablet e desktop
- **Animações contínuas** — Float no header, pulse-glow no botão CTA

---

## Instalação

```bash
# Clonar o repositório
git clone <url-do-repo>
cd craftfood

# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Servidor de produção |
| `npm run lint` | Verifica ESLint |

## Estrutura de Pastas

```
craftfood/
├── public/              # Assets estáticos (logo, ícones sociais)
├── src/
│   ├── app/
│   │   ├── globals.css      # Tailwind + scrollbar + animações
│   │   ├── layout.tsx       # Layout raiz com Navigation
│   │   ├── page.tsx         # Página Home
│   │   └── cardapio/
│   │       └── page.tsx     # Página Cardápio
│   ├── components/          # Componentes React
│   └── hooks/
│       └── useScrollReveal.ts  # Hook de animação por scroll
├── tailwind.config.ts   # Cores e fontes da marca
├── next.config.mjs      # Config com domínios de imagem (Unsplash)
└── package.json
```

## Tecnologias

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript 5**
- **Tailwind CSS 3.4**
- **next/image** com remote patterns (Unsplash)

## Cores da Marca

| Token | Cor | Hex |
|-------|-----|-----|
| `brand-red` | Vermelho | `#dc2626` |
| `brand-dark` | Escuro | `#1a1a1a` |
| `brand-gold` | Dourado | `#d4a574` |
| `brand-cream` | Creme | `#faf7f2` |

---

> **Nota:** Todos os dados do site (nomes, endereços, telefones, avaliações) são fictícios e utilizados apenas para fins de demonstração.
