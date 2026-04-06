import build from '@hono/vite-build/cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    hmr: {
      overlay: false
    }
  },
  plugins: [
    build(),
    devServer({
      entry: 'src/index.tsx'
    })
  ]
})
