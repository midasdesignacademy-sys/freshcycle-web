# PROMPT PARA CLAUDE CODE — THE FRESH CYCLE

Copie e cole este prompt completo no seu Claude Code local.

---

## PROMPT:

```
Olá! Preciso que você configure e rode um projeto web já existente no meu computador.
O projeto se chama "The Fresh Cycle" — é um site institucional de agência de marketing digital.

## STACK DO PROJETO
- **Framework backend**: Hono v4 (TypeScript)
- **Build tool**: Vite v6
- **Runtime/Deploy**: Cloudflare Pages / Workers
- **Node.js necessário**: v18+ (recomendado v20)
- **Package manager**: npm

## PASSO 1 — VERIFICAR PRÉ-REQUISITOS

Antes de qualquer coisa, verifique se tenho instalado:

1. **Node.js v18+**
   ```bash
   node --version
   ```
   Se não tiver: https://nodejs.org/en/download

2. **npm v9+**
   ```bash
   npm --version
   ```

3. **Git**
   ```bash
   git --version
   ```

## PASSO 2 — CLONAR O REPOSITÓRIO

Clone o projeto do GitHub:
```bash
git clone https://github.com/midasdesignacademy-sys/freshcycle-web.git
cd freshcycle-web
```

## PASSO 3 — INSTALAR DEPENDÊNCIAS

```bash
npm install
```

Isso vai instalar automaticamente (está no package.json):
- `hono` ^4.12.9 — framework web
- `vite` ^6.3.5 — bundler
- `wrangler` ^4.4.0 — CLI Cloudflare (para rodar e fazer deploy)
- `@hono/vite-build` ^1.2.0 — plugin de build
- `@hono/vite-dev-server` ^0.18.2 — servidor de dev

## PASSO 4 — RODAR EM DESENVOLVIMENTO LOCAL

### Opção A — Dev com Vite (mais rápido, recomendado para editar):
```bash
npm run dev
```
Acesse: http://localhost:5173

### Opção B — Preview simulando Cloudflare (mais fiel ao deploy):
```bash
npm run build
npm run preview
```
Acesse: http://localhost:8787

## PASSO 5 — BUILD DE PRODUÇÃO

```bash
npm run build
```
Gera a pasta `dist/` com:
- `_worker.js` — app Hono compilado
- `_routes.json` — rotas
- Assets estáticos

## PASSO 6 — DEPLOY NO CLOUDFLARE PAGES

### 6.1 — Login no Cloudflare (apenas 1ª vez):
```bash
npx wrangler login
```
Isso vai abrir o browser para autenticar na sua conta Cloudflare.

### 6.2 — Criar o projeto no Cloudflare Pages (apenas 1ª vez):
```bash
npx wrangler pages project create freshcycle-web --production-branch main
```

### 6.3 — Fazer deploy:
```bash
npm run deploy
```
Ou manualmente:
```bash
npm run build
npx wrangler pages deploy dist --project-name freshcycle-web
```

### 6.4 — Conectar ao GitHub para deploy automático (recomendado):
1. Acesse https://pages.cloudflare.com
2. Clique no projeto "freshcycle-web"
3. Vá em Settings → Builds & deployments
4. Clique "Connect to Git"
5. Selecione o repo: midasdesignacademy-sys/freshcycle-web
6. Build command: `npm run build`
7. Build output directory: `dist`
8. Salve — agora todo `git push` faz deploy automático ✅

## ESTRUTURA DE ARQUIVOS

```
freshcycle-web/
├── src/
│   ├── index.tsx        # App principal — TODO o HTML/CSS/JS do site está aqui
│   └── renderer.tsx     # Renderer JSX do Hono (usado internamente)
├── public/
│   └── static/
│       ├── styles.css   # 2700+ linhas de CSS premium
│       ├── app.js       # JavaScript frontend (navbar, animações, etc)
│       ├── favicon.svg  # Ícone do site
│       └── style.css    # CSS auxiliar
├── ecosystem.config.cjs # Config PM2 (apenas para servidores Linux/sandbox)
├── wrangler.jsonc       # Config Cloudflare Workers/Pages
├── vite.config.ts       # Config Vite + plugins Hono
├── tsconfig.json        # Config TypeScript
└── package.json         # Dependências e scripts
```

## SCRIPTS DISPONÍVEIS

| Comando | O que faz |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento Vite (porta 5173) |
| `npm run build` | Build de produção → gera pasta dist/ |
| `npm run preview` | Preview local simulando Cloudflare (porta 8787) |
| `npm run deploy` | Build + deploy no Cloudflare Pages |

## ONDE EDITAR O CONTEÚDO

**Todo o conteúdo do site está em:** `src/index.tsx`
- Textos, seções, imagens, links → edite neste arquivo
- É um arquivo TypeScript/HTML com ~1131 linhas

**Estilos visuais:** `public/static/styles.css`
- Variáveis CSS no `:root` (cores, fontes, espaçamentos)
- Para mudar cores: edite as variáveis `--green`, `--gold`, `--cream`

**Interações JavaScript:** `public/static/app.js`
- Navbar scroll, animações, contadores, mobile menu

## CONFIGURAÇÃO DO WRANGLER (wrangler.jsonc)

O arquivo atual está assim — NÃO precisa mudar para rodar localmente:
```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "webapp",
  "compatibility_date": "2026-03-28",
  "pages_build_output_dir": "./dist",
  "compatibility_flags": ["nodejs_compat"]
}
```

## POSSÍVEIS ERROS E SOLUÇÕES

### Erro: "node_modules not found"
```bash
npm install
```

### Erro: "wrangler not found"
```bash
npx wrangler --version
# ou instalar globalmente:
npm install -g wrangler
```

### Erro no build — TypeScript
Verifique se o Node.js é v18 ou superior:
```bash
node --version
```

### Porta 5173 em uso
```bash
npm run dev -- --port 3000
```

### Wrangler pede login no deploy
```bash
npx wrangler login
```

## RESUMO RÁPIDO (3 comandos para rodar):

```bash
git clone https://github.com/midasdesignacademy-sys/freshcycle-web.git
cd freshcycle-web
npm install
npm run dev
```

Acesse http://localhost:5173 e o site estará rodando! 🚀
```

---

> **Arquivo gerado automaticamente para uso com Claude Code local.**
> Repositório: https://github.com/midasdesignacademy-sys/freshcycle-web
