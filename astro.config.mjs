import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://samuraicryptotrading.netlify.app', // URL do site
  build: { target: 'esnext' }, // Target moderno
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // Evita conflito com estilos base do Tailwind
    }),
  ],
  output: 'hybrid', // Geração híbrida de SSR e SSG (opcional)
  adapter: netlify(), // Configuração para deploy no Netlify
});
