// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// In locale Astro/Vite non espone le variabili di .env su process.env (solo su
// import.meta.env). L'endpoint src/pages/api/chat.ts legge process.env direttamente
// (così funziona senza modifiche una volta deployato su Vercel, che popola process.env
// nativamente): qui carichiamo .env anche su process.env per farlo funzionare in `astro dev`.
try {
  process.loadEnvFile();
} catch {
  // .env assente (es. in CI/build senza segreti locali): non bloccante.
}

// https://astro.build/config
export default defineConfig({
  site: 'https://www.magma610.it',
  // output resta 'static' (default): tutte le pagine restano prerenderizzate,
  // tranne l'endpoint src/pages/api/chat.ts che dichiara `export const prerender = false`.
  adapter: vercel(),
  integrations: [mdx(), sitemap()],
  vite: {
    server: {
      allowedHosts: ['.app.github.dev']
    }
  }
});