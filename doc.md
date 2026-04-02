# 📖 Documentação Completa — CraftFood

> **CraftFood — Culinária Oriental Artesanal**
> Site institucional de um restaurante fictício de culinária japonesa, desenvolvido com foco em design premium, animações suaves e experiência visual imersiva.

---

## 📋 Índice

1. [Descrição do Projeto](#-descrição-do-projeto)
2. [Tecnologias Utilizadas](#-tecnologias-utilizadas)
3. [Estrutura do Projeto](#-estrutura-do-projeto)
4. [Explicação Detalhada dos Arquivos](#-explicação-detalhada-dos-arquivos)
5. [Como Instalar as Dependências](#-como-instalar-as-dependências)
6. [Como Rodar o Projeto Localmente](#-como-rodar-o-projeto-localmente)
7. [Como Clonar o Repositório](#-como-clonar-o-repositório)
8. [Scripts Disponíveis](#-scripts-disponíveis)
9. [Paleta de Cores da Marca](#-paleta-de-cores-da-marca)
10. [Fontes Tipográficas](#-fontes-tipográficas)

---

## 🎯 Descrição do Projeto

O **CraftFood** é um site institucional responsivo para um restaurante de culinária japonesa artesanal localizado em São Paulo. O projeto foi construído como uma aplicação front-end moderna utilizando **Next.js 14** com App Router, **React 18**, **TypeScript** e **Tailwind CSS**.

### Principais Características:
- 🎨 Design premium com tons escuros, dourado e vermelho
- ✨ Animações de scroll reveal com 6 variantes diferentes
- 📱 Layout totalmente responsivo (mobile, tablet e desktop)
- 🖼️ Imagens de alta qualidade via Unsplash otimizadas com `next/image`
- 🎌 Elementos decorativos japoneses (kanjis como marca d'água, divisores estilizados)
- 🔥 Efeito de fumaça/vapor nos cards do cardápio ao passar o mouse
- 📜 Scrollbar customizada com gradiente nas cores da marca
- 💫 Textura grain overlay em toda a página para dar um aspecto artesanal

### Páginas:
| Rota | Descrição |
|------|-----------|
| `/` | **Home** — Header hero, seção Sobre Nós, Pratos Populares, Galeria, Chef, Comentários, Newsletter e Footer |
| `/cardapio` | **Cardápio** — Menu completo organizado por categorias (Entradas, Sushis, Pratos Principais, Sobremesas, Bebidas) + Horários & Eventos |

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Função |
|------------|--------|--------|
| **Next.js** | 14.2.15 | Framework React com App Router, SSR e otimização de imagens |
| **React** | ^18.3.1 | Biblioteca para construção da interface de usuário |
| **React DOM** | ^18.3.1 | Renderização dos componentes React no DOM |
| **TypeScript** | ^5 | Tipagem estática para maior segurança e produtividade |
| **Tailwind CSS** | ^3.4 | Framework CSS utilitário para estilização |
| **PostCSS** | ^8 | Processador CSS para transformações (usado pelo Tailwind) |
| **Autoprefixer** | ^10 | Adiciona prefixos de vendor automaticamente no CSS |
| **ESLint** | ^8 | Linter para manter qualidade e consistência do código |
| **eslint-config-next** | 14.2.15 | Configuração ESLint específica para projetos Next.js |

---

## 📁 Estrutura do Projeto

```
craftfood/
├── 📂 public/                      # Assets estáticos
│   ├── logo.svg                    # Logo do restaurante
│   ├── hero__img.png               # Imagem hero
│   ├── sushi__header.png           # Imagem do header
│   ├── first_populares.png         # Imagem prato popular 1
│   ├── second_populares.png        # Imagem prato popular 2
│   ├── three_populares.png         # Imagem prato popular 3
│   ├── facebook.svg                # Ícone Facebook
│   ├── instagram.svg               # Ícone Instagram
│   └── twitter.svg                 # Ícone Twitter
│
├── 📂 src/
│   ├── 📂 app/                     # App Router (Next.js 14)
│   │   ├── globals.css             # Estilos globais, animações e scrollbar
│   │   ├── layout.tsx              # Layout raiz da aplicação
│   │   ├── page.tsx                # Página Home (/)
│   │   └── 📂 cardapio/
│   │       └── page.tsx            # Página Cardápio (/cardapio)
│   │
│   ├── 📂 components/              # Componentes React reutilizáveis
│   │   ├── Navigation.tsx          # Barra de navegação fixa
│   │   ├── Header.tsx              # Seção hero principal
│   │   ├── Hero.tsx                # Seção "Sobre Nós"
│   │   ├── Populares.tsx           # Pratos populares em grid
│   │   ├── Galeria.tsx             # Galeria de fotos
│   │   ├── Chef.tsx                # Seção do Chef
│   │   ├── Comentarios.tsx         # Depoimentos de clientes
│   │   ├── Newsletter.tsx          # Formulário de newsletter
│   │   ├── Cardapio.tsx            # Menu completo por categorias
│   │   ├── Agenda.tsx              # Horários e eventos
│   │   ├── Footer.tsx              # Rodapé do site
│   │   └── ScrollReveal.tsx        # Componente wrapper de animação
│   │
│   └── 📂 hooks/                   # Custom hooks
│       └── useScrollReveal.ts      # Hook de animação por scroll
│
├── .eslintrc.json                  # Configuração do ESLint
├── .gitignore                      # Arquivos ignorados pelo Git
├── next-env.d.ts                   # Tipos do Next.js (auto-gerado)
├── next.config.mjs                 # Configuração do Next.js
├── package.json                    # Dependências e scripts
├── package-lock.json               # Lock das dependências
├── postcss.config.mjs              # Configuração do PostCSS
├── tailwind.config.ts              # Configuração do Tailwind CSS
└── tsconfig.json                   # Configuração do TypeScript
```

---

## 🔍 Explicação Detalhada dos Arquivos

### 📂 Configuração Raiz

#### `package.json`
Define o projeto **craftfood** (versão 1.0.0) como privado. Contém os scripts de desenvolvimento (`dev`, `build`, `start`, `lint`) e lista todas as dependências de produção (Next.js, React, React DOM) e desenvolvimento (TypeScript, Tailwind CSS, ESLint, PostCSS, Autoprefixer).

#### `next.config.mjs`
Configuração do Next.js que habilita imagens remotas do domínio `images.unsplash.com` via `remotePatterns`, permitindo que o componente `next/image` otimize imagens do Unsplash automaticamente (lazy loading, formatos modernos como WebP/AVIF, redimensionamento).

#### `tailwind.config.ts`
Define a paleta de cores da marca (`brand-red`, `brand-dark`, `brand-gold`, `brand-cream`, `brand-charcoal`, `brand-warmblack`, `brand-amber`, `brand-muted`), as famílias tipográficas (`Playfair Display` para títulos, `DM Sans` para corpo, `Noto Serif JP` para detalhes japoneses) e uma imagem de fundo SVG para textura grain.

#### `tsconfig.json`
Configuração do TypeScript com modo `strict`, resolução de módulos `bundler`, suporte a JSX `preserve`, compilação incremental e path alias `@/*` apontando para `./src/*`.

#### `postcss.config.mjs`
Configura os plugins PostCSS: `tailwindcss` (processa as diretivas `@tailwind`) e `autoprefixer` (adiciona prefixos CSS de vendor).

#### `.eslintrc.json`
Estende a configuração `next/core-web-vitals` para garantir boas práticas de performance e acessibilidade.

#### `.gitignore`
Ignora `node_modules/`, `.next/` e `tsconfig.tsbuildinfo` do controle de versão.

---

### 📂 `src/app/` — Páginas e Layout

#### `layout.tsx` — Layout Raiz
- Define os metadados globais: título "CraftFood — Culinária Oriental Artesanal" e descrição SEO
- Define o idioma como `pt-BR`
- Aplica a classe `grain-overlay` ao `<body>` para textura visual
- Renderiza o componente `<Navigation />` em todas as páginas
- Envolve o conteúdo das páginas filhas via `{children}`

#### `page.tsx` — Página Home (`/`)
Compõe a página principal montando os seguintes componentes na ordem:
1. `Header` — Hero section com background fullscreen
2. `Hero` — Seção "Sobre Nós" com história do restaurante
3. `Populares` — Grid de pratos populares
4. `Galeria` — Galeria de fotos do restaurante e pratos
5. `Chef` — Apresentação do Chef Takeshi Yamamoto
6. `Comentarios` — Depoimentos de clientes
7. `Newsletter` — Formulário de inscrição
8. `Footer` — Rodapé com links e informações

#### `cardapio/page.tsx` — Página Cardápio (`/cardapio`)
Compõe a página do cardápio com:
1. `Cardapio` — Menu completo organizado em 5 categorias
2. `Agenda` — Horários de funcionamento e eventos especiais
3. `Footer` — Rodapé

#### `globals.css` — Estilos Globais
Arquivo CSS extenso que define:
- **Importação de fontes** do Google Fonts (Playfair Display, DM Sans, Noto Serif JP)
- **Base styles**: fundo `brand-cream`, texto `brand-dark`, scroll suave
- **Grain overlay**: textura SVG fixa sobre toda a página (opacity 0.035)
- **Scrollbar customizada**: gradiente `brand-gold` → `brand-red` no thumb
- **6 variantes de Scroll Reveal**: fade-up, fade-down, fade-left, fade-right, scale-up, blur-in
- **Animação float**: movimento suave vertical para imagem hero (6s infinite)
- **Pulse glow**: brilho pulsante nos botões CTA (3s infinite)
- **Divisor japonês** (`.jp-divider`): linhas decorativas com gradiente dourado
- **Shimmer**: efeito brilhante em texto dourado (4s linear infinite)
- **Parallax background**: suporte a `background-attachment: fixed`
- **Kanji watermark**: marca d'água com fonte japonesa (opacity 0.03)
- **Card hover line**: linha gradiente que aparece no hover dos cards
- **Stagger children**: animação escalonada para filhos de um container
- **Efeito de fumaça/vapor**: 3 variantes de animação de partículas de vapor que aparecem ao passar o mouse nos cards do cardápio (steam-1, steam-2, steam-3)

---

### 📂 `src/components/` — Componentes React

#### `Navigation.tsx` — Barra de Navegação
- **Client component** com estado para menu mobile (`open`) e detecção de scroll (`scrolled`)
- Navbar fixa no topo (`fixed`, `z-50`) que muda de transparente para fundo escuro ao scrollar (>40px)
- Logo SVG à esquerda com efeito hover de escala
- Menu desktop com links: Início, Sobre Nós, Populares, Galeria + botão "Cardápio" destacado
- Menu mobile com hamburger animado (3 barras que se transformam em X)
- Transição suave do menu mobile com `max-height` e `opacity`
- Links com underline animado em dourado no hover

#### `Header.tsx` — Hero Section Principal
- Seção fullscreen (`min-h-screen`) com imagem de fundo do Unsplash (sushi bar)
- Gradientes sobrepostos para escurecer a imagem de fundo
- Kanji decorativo "職人" (artesão) como marca d'água à direita
- Título "Culinária Oriental" com efeito shimmer dourado na palavra "Oriental"
- Subtítulo com linha decorativa à esquerda
- Dois CTAs: "Explorar Cardápio" (dourado, com pulse glow) e "Nossa História" (outline)
- Imagem de sushi com moldura decorativa (bordas douradas) e animação float
- Indicador de scroll na parte inferior com animação pulse
- Todas as seções usam `ScrollReveal` com variantes e delays escalonados

#### `Hero.tsx` — Seção Sobre Nós
- Seção com fundo claro (`brand-cream`) e kanji "物語" (história) como marca d'água
- Layout flex com imagem à esquerda e texto à direita (responsivo)
- Foto do restaurante com card sobreposto "10+ Anos de tradição"
- Linhas decorativas douradas na lateral da imagem
- Texto descritivo sobre a história do restaurante (desde 2015)
- Estatísticas: "20+ Pratos no menu", "4 Chefs especialistas", "5★ Avaliação média"

#### `Populares.tsx` — Pratos Populares
- Seção com fundo escuro (`brand-charcoal`) e kanji "人気" (popular) como marca d'água
- Grid de 3 cards com proporção 3:4 (vertical)
- Cada card possui: tag (ex: "Mais Pedido"), preço, imagem fullsize com zoom no hover, gradiente overlay, nome, descrição e link "Ver detalhes"
- 3 pratos definidos em array: Ramen de Frango (R$30), Ramen Apimentado (R$50), Ramen Tradicional (R$30)
- Linha decorativa animada no hover (`.card-line`)

#### `Galeria.tsx` — Galeria de Fotos
- Seção com fundo claro e título "Nossa Galeria"
- 2 filas de fotos em grid responsivo (3 colunas no desktop)
- Componente interno `GalleryImage` com efeito de zoom, overlay escuro e cantos decorativos dourados no hover
- 6 fotos do Unsplash: preparação de sushi, sashimi, ramen, ambiente, temaki, gyoza
- Cada foto mostra legenda ao passar o mouse

#### `Chef.tsx` — Seção do Chef
- Seção escura com kanji "料理人" (cozinheiro) como marca d'água
- Layout flex invertido (texto à esquerda, imagem à direita)
- Apresentação do Chef Takeshi Yamamoto com bio e citação em blockquote
- Moldura decorativa com bordas douradas na foto
- Estatísticas: "20+ Anos de experiência", "3 Estrelas Michelin", "8 Prêmios culinários"

#### `Comentarios.tsx` — Depoimentos
- Seção com fundo `brand-warmblack` e textura diagonal sutil de fundo
- Componente interno `Stars` que renderiza estrelas SVG (preenchidas/vazias)
- Grid de 4 cards com depoimentos de clientes
- Cada card: estrelas, texto do depoimento, avatar com iniciais e nome/profissão
- Efeito hover: fundo levemente mais claro, borda dourada, canto decorativo
- 4 avaliações fictícias de: Fernanda Lopes, Rafael Mendes, Camila Duarte, Lucas Tanaka

#### `Newsletter.tsx` — Formulário de Newsletter
- Seção com fundo claro e padrão radial sutil de pontos dourados
- Card centralizado com fundo escuro e cantos decorativos dourados
- Campo de email e botão "Inscrever-se"
- Nota "Sem spam. Cancele quando quiser."

#### `Cardapio.tsx` — Menu Completo
- Seção com kanji "品書" (cardápio) como marca d'água
- 5 categorias com kanji decorativo: Entradas (前菜), Sushis & Sashimis (寿司), Pratos Principais (主菜), Sobremesas (甘味), Bebidas (飲物)
- Grid de 2 colunas com cards de itens do menu
- Cada card tem: nome, descrição, preço em vermelho, linha lateral dourada no hover, linha pontilhada até o preço
- **Efeito de fumaça**: 5 partículas de vapor que surgem ao passar o mouse (classe `.steam-card`)
- Total de 18 itens no cardápio com preços variando de R$12 a R$68

#### `Agenda.tsx` — Horários e Eventos
- Seção escura com imagem de fundo de restaurante (Unsplash) com overlay
- Layout em 2 colunas: horários à esquerda, eventos à direita
- **Horários**: Segunda a Quinta (11h30-22h), Sexta e Sábado (11h30-23h30), Domingo e Feriados (12h-21h)
- Nota sobre reservas para grupos com telefone de contato
- **4 Eventos**: Noite do Saquê (sextas), Sushi Festival (1º sábado), Happy Hour Oriental (seg-qui), Brunch Japonês (domingos)
- Cards de eventos com ícone emoji, descrição e frequência

#### `Footer.tsx` — Rodapé
- Fundo escuro com 4 colunas responsivas:
  1. **Marca**: logo, descrição e ícones de redes sociais (Facebook, Instagram, Twitter)
  2. **Navegação**: links para todas as seções/páginas
  3. **Contato**: endereço (Av. Sakura, 1200), telefone e email
  4. **Horários**: resumo dos horários + link "Fazer reserva"
- Barra inferior com copyright dinâmico e "Feito com paixão em São Paulo"

#### `ScrollReveal.tsx` — Componente de Animação
- Wrapper que adiciona animação de reveal ao scrollar
- Aceita props: `variant` (6 tipos), `delay` (em ms) e `className`
- Usa o hook `useScrollReveal` para detectar visibilidade
- Aplica classes CSS que controlam a animação via `globals.css`

---

### 📂 `src/hooks/` — Custom Hooks

#### `useScrollReveal.ts` — Hook de Animação por Scroll
- Utiliza a API `IntersectionObserver` nativa do navegador
- Aceita configurações opcionais: `threshold` (padrão 0.15 = 15% visível) e `rootMargin` (padrão "0px 0px -40px 0px")
- Quando o elemento entra na viewport, adiciona a classe `revealed` e para de observar
- Retorna uma `ref` para ser aplicada ao elemento HTML alvo
- Usa `observer.unobserve()` para garantir que a animação aconteça apenas uma vez

---

### 📂 `public/` — Assets Estáticos

| Arquivo | Descrição |
|---------|-----------|
| `logo.svg` | Logo vetorial do restaurante CraftFood |
| `hero__img.png` | Imagem principal do hero |
| `sushi__header.png` | Imagem de sushi para o header |
| `first_populares.png` | Imagem do primeiro prato popular |
| `second_populares.png` | Imagem do segundo prato popular |
| `three_populares.png` | Imagem do terceiro prato popular |
| `facebook.svg` | Ícone SVG do Facebook |
| `instagram.svg` | Ícone SVG do Instagram |
| `twitter.svg` | Ícone SVG do Twitter |

---

## 📦 Como Instalar as Dependências

Certifique-se de ter o **Node.js** (versão 18 ou superior) e o **npm** instalados na sua máquina.

```bash
# Navegue até a pasta do projeto
cd craftfood

# Instale todas as dependências
npm install
```

Isso irá instalar automaticamente todas as dependências listadas no `package.json`, incluindo Next.js, React, TypeScript, Tailwind CSS e demais pacotes.

---

## 🚀 Como Rodar o Projeto Localmente

```bash
# Modo de desenvolvimento (com hot reload)
npm run dev
```

O servidor irá iniciar em **[http://localhost:3000](http://localhost:3000)**.

Para gerar uma build de produção otimizada:

```bash
# Gerar build de produção
npm run build

# Iniciar servidor de produção
npm run start
```

---

## 📥 Como Clonar o Repositório

```bash
# Clone o repositório
git clone https://github.com/dev-erickydias/craftfood.git

# Entre na pasta do projeto
cd craftfood

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

Acesse **[http://localhost:3000](http://localhost:3000)** no seu navegador.

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot reload |
| `npm run build` | Gera a build otimizada para produção |
| `npm run start` | Inicia o servidor de produção (requer build antes) |
| `npm run lint` | Executa o ESLint para verificar problemas no código |

---

## 🎨 Paleta de Cores da Marca

| Token | Nome | Hex | Uso |
|-------|------|-----|-----|
| `brand-red` | Vermelho | `#c0392b` | Preços, destaques de alerta |
| `brand-dark` | Escuro | `#0d0d0d` | Fundo principal escuro, texto |
| `brand-gold` | Dourado | `#c9a96e` | Destaques, CTAs, elementos decorativos |
| `brand-cream` | Creme | `#f5f0e8` | Fundo claro principal |
| `brand-charcoal` | Carvão | `#1a1714` | Fundo de seções alternadas |
| `brand-warmblack` | Preto Quente | `#121010` | Fundo do header e seção de comentários |
| `brand-amber` | Âmbar | `#e8b94a` | Hover de botões dourados |
| `brand-muted` | Suave | `#8a8072` | Texto secundário/muted |

---

## ✏️ Fontes Tipográficas

| Família | Tipo | Uso |
|---------|------|-----|
| **Playfair Display** | Serif | Títulos e headings (`font-heading`) |
| **DM Sans** | Sans-serif | Corpo de texto e UI (`font-body`) |
| **Noto Serif JP** | Serif japonesa | Detalhes e labels japoneses (`font-accent`) |

---

> 📌 **Nota:** Todos os dados do site (nomes, endereços, telefones, avaliações, preços) são fictícios e utilizados apenas para fins de demonstração e portfólio.

---

*Documentação gerada em Abril de 2026.*
