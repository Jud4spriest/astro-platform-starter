import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://samuraicryptotrading.netlify.app',
  build: { target: 'esnext' },
  routes: {
    'landing-page': '/landing-page/',},
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false
        })
    ],
    output: 'hybrid',
    adapter: netlify()
});


export default defineConfig({
  
});
