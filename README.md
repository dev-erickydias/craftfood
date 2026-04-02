<div align="center">

# 🍣 CraftFood — Culinária Oriental Artesanal

<br>

<img src="https://img.shields.io/badge/CraftFood-Culin%C3%A1ria%20Oriental-c9a96e?style=for-the-badge&labelColor=0d0d0d" alt="CraftFood" />

<br><br>

**Site institucional de um restaurante de culinária japonesa artesanal.**
<br>
Design premium, animações suaves e experiência visual imersiva.

<br>

![Next.js](https://img.shields.io/badge/Next.js-14.2-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

<br>

[🔗 Ver Demo ao Vivo](#) · [📖 Documentação Completa](./doc.md) · [🐛 Reportar Bug](https://github.com/dev-erickydias/craftfood/issues)

</div>

---

## 📸 Screenshots

<div align="center">

> 🖼️ *Adicione aqui capturas de tela do projeto.*
>
> Sugestão: prints da Home (header hero, seção sobre, pratos populares, galeria, chef, comentários) e da página de Cardápio.

</div>

<!-- Descomente e substitua pelos caminhos das suas imagens:
<div align="center">
  <img src=".github/screenshot-home.png" alt="Home" width="80%" />
  <br><br>
  <img src=".github/screenshot-cardapio.png" alt="Cardápio" width="80%" />
</div>
-->

---

## 📝 Sobre o Projeto

O **CraftFood** é um site institucional responsivo para um restaurante fictício de culinária japonesa artesanal localizado em São Paulo. O projeto foi desenvolvido com foco em **design sofisticado**, **performance** e **experiência visual premium**, simulando um site real de restaurante de alto padrão.

O site conta com duas páginas principais:
- 🏠 **Home** — Apresentação completa do restaurante com hero imersivo, história, pratos populares, galeria, chef, depoimentos e newsletter
- 🍱 **Cardápio** — Menu completo com 5 categorias, 18 pratos e seção de horários/eventos

---

## ✨ Funcionalidades

🎭 **Animações de Scroll Reveal** — 6 variantes (fade-up, fade-down, fade-left, fade-right, scale-up, blur-in) com delays escalonados usando IntersectionObserver

🎌 **Elementos Decorativos Japoneses** — Kanjis como marca d'água, divisores estilizados com linhas douradas, tipografia japonesa (Noto Serif JP)

🔥 **Efeito de Fumaça/Vapor** — Partículas animadas de vapor nos cards do cardápio ao passar o mouse

💫 **Shimmer Dourado** — Efeito brilhante animado no texto "Oriental" do hero

🖱️ **Scrollbar Customizada** — Gradiente dourado → vermelho nas cores da marca

🎨 **Textura Grain Overlay** — Camada SVG fixa sobre toda a página para aspecto artesanal

📱 **Design Responsivo** — Layout totalmente adaptável para mobile, tablet e desktop

🍔 **Menu Hamburger Animado** — Navegação mobile com transição suave das 3 barras para X

🖼️ **Imagens Otimizadas** — Fotos de alta qualidade via Unsplash com `next/image` (lazy loading, WebP/AVIF)

🌊 **Animação Float** — Imagem hero flutuante com movimento suave contínuo

✨ **Pulse Glow** — Botão CTA com brilho pulsante dourado

📊 **Galeria Interativa** — Fotos com zoom, overlay e cantos decorativos no hover

---

## 🛠️ Tecnologias

<div align="center">

| Tecnologia | Descrição |
|:----------:|-----------|
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="30" /> | **Next.js 14** — Framework React com App Router |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="30" /> | **React 18** — Biblioteca para UI |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="30" /> | **TypeScript 5** — Tipagem estática |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="30" /> | **Tailwind CSS 3.4** — Framework CSS utilitário |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postcss/postcss-original.svg" width="30" /> | **PostCSS** — Processador CSS |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" width="30" /> | **ESLint** — Linter de código |

</div>

---

## 📁 Estrutura do Projeto

```
craftfood/
├── 📂 public/                  # Assets estáticos (logo, ícones, imagens)
├── 📂 src/
│   ├── 📂 app/
│   │   ├── globals.css         # Estilos globais + animações
│   │   ├── layout.tsx          # Layout raiz com Navigation
│   │   ├── page.tsx            # Página Home
│   │   └── 📂 cardapio/
│   │       └── page.tsx        # Página Cardápio
│   ├── 📂 components/          # 11 componentes React
│   │   ├── Navigation.tsx      # Navbar fixa responsiva
│   │   ├── Header.tsx          # Hero section fullscreen
│   │   ├── Hero.tsx            # Seção Sobre Nós
│   │   ├── Populares.tsx       # Grid de pratos populares
│   │   ├── Galeria.tsx         # Galeria de fotos
│   │   ├── Chef.tsx            # Apresentação do Chef
│   │   ├── Comentarios.tsx     # Depoimentos de clientes
│   │   ├── Newsletter.tsx      # Formulário de newsletter
│   │   ├── Cardapio.tsx        # Menu completo
│   │   ├── Agenda.tsx          # Horários e eventos
│   │   ├── Footer.tsx          # Rodapé
│   │   └── ScrollReveal.tsx    # Wrapper de animação
│   └── 📂 hooks/
│       └── useScrollReveal.ts  # Hook com IntersectionObserver
├── tailwind.config.ts          # Cores e fontes da marca
├── next.config.mjs             # Config Next.js (Unsplash)
├── tsconfig.json               # Config TypeScript
└── package.json                # Dependências e scripts
```

---

## 🚀 Como Usar

### Pré-requisitos

- **Node.js** versão 18 ou superior
- **npm** (incluído com o Node.js)

### 📥 Clonar e Rodar

```bash
# 1. Clone o repositório
git clone https://github.com/dev-erickydias/craftfood.git

# 2. Entre na pasta do projeto
cd craftfood

# 3. Instale as dependências
npm install

# 4. Rode o projeto em modo de desenvolvimento
npm run dev
```

🌐 Acesse **[http://localhost:3000](http://localhost:3000)** no seu navegador.

### 📜 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | 🔄 Servidor de desenvolvimento com hot reload |
| `npm run build` | 📦 Build otimizada para produção |
| `npm run start` | 🚀 Servidor de produção |
| `npm run lint` | 🔍 Verificação de código com ESLint |

---

## 🎨 Paleta de Cores

<div align="center">

| Cor | Nome | Hex |
|:---:|------|:---:|
| 🔴 | Vermelho | `#c0392b` |
| ⚫ | Escuro | `#0d0d0d` |
| 🟡 | Dourado | `#c9a96e` |
| 🟤 | Creme | `#f5f0e8` |
| ⬛ | Carvão | `#1a1714` |
| 🟠 | Âmbar | `#e8b94a` |

</div>

---

## 👨‍💻 Autor

<div align="center">

**Ericky Dias**

[![GitHub](https://img.shields.io/badge/GitHub-dev--erickydias-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dev-erickydias)

</div>

---

<div align="center">

📌 *Todos os dados do site (nomes, endereços, telefones, avaliações) são fictícios e utilizados apenas para fins de demonstração e portfólio.*

<br>

Feito com ❤️ e 🍣 em São Paulo

</div>
