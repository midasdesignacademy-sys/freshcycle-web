# The Fresh Cycle

> Agencia de Marketing Digital — Asunción, Paraguay

## Visão Geral do Projeto

- **Nome**: The Fresh Cycle
- **Objetivo**: Website institucional completo para agência de marketing digital no Paraguai
- **Idioma**: Espanhol (mercado paraguaio)
- **Stack**: Hono + TypeScript + Vite + Cloudflare Pages

## Funcionalidades Implementadas

- ✅ **Navbar** responsiva com menu mobile (hamburger)
- ✅ **Hero section** com animação de contador de estatísticas
- ✅ **Seção Serviços** — cards com hover effects
- ✅ **Portafolio** — galeria com projetos reais de clientes
- ✅ **Seção Nosotros** — equipe e diferenciais
- ✅ **Tabela de Preços** — 3 planos (Básico, Profesional, Premium)
- ✅ **Formulário de Contato** — WhatsApp + email direto
- ✅ **Footer** completo com redes sociais e links
- ✅ **SEO** — meta tags, Open Graph, descrições
- ✅ **Performance** — preload de imagens críticas (LCP), fonts otimizadas
- ✅ **Design Premium** — tipografia Cormorant Garamond + DM Sans

## Estrutura do Projeto

```
freshcycle-web/
├── src/
│   └── index.tsx          # App Hono principal (HTML completo inline)
├── public/
│   └── static/
│       ├── styles.css     # Estilos principais
│       ├── app.js         # JavaScript frontend
│       └── favicon.svg    # Ícone do site
├── dist/                  # Build de produção (gerado, não comitado)
├── ecosystem.config.cjs   # Configuração PM2 (dev sandbox)
├── wrangler.jsonc         # Configuração Cloudflare Workers
├── vite.config.ts         # Configuração Vite + Hono plugin
├── package.json           # Dependências e scripts
└── tsconfig.json          # Configuração TypeScript
```

## URLs

- **GitHub**: https://github.com/midasdesignacademy-sys/freshcycle-web
- **Deploy**: Cloudflare Pages

## Design

- **Tipografia**: Cormorant Garamond (headings, serif elegante) + DM Sans (body, moderno)
- **Paleta**: Dourado `#C9A96E` / Branco `#FAFAF8` / Escuro `#0D0D0D`
- **Estilo**: Premium, editorial, minimalista

## Como Rodar Localmente

```bash
# Instalar dependências
npm install

# Build
npm run build

# Dev com PM2 (ambiente sandbox)
pm2 start ecosystem.config.cjs

# Ou dev local com Vite
npm run dev
```

## Deploy para Cloudflare Pages

```bash
# Build e deploy
npm run deploy

# Ou manualmente
npm run build
npx wrangler pages deploy dist --project-name freshcycle-web
```

## Dependências Principais

| Pacote | Versão | Uso |
|--------|--------|-----|
| `hono` | ^4.12.9 | Framework web edge |
| `vite` | ^6.3.5 | Bundler / build tool |
| `wrangler` | ^4.4.0 | CLI Cloudflare |
| `@hono/vite-build` | ^1.2.0 | Plugin Hono para Vite |

## Bibliotecas CDN (Frontend)

- **Fonts**: Google Fonts (Cormorant Garamond + DM Sans)
- **Icons**: FontAwesome Free 6.5.0

## Status

- **Plataforma**: Cloudflare Pages (Edge)
- **Status**: ✅ Ativo
- **Última atualização**: Março 2026

---

*Desenvolvido com Hono + Cloudflare Workers para máxima performance global.*
