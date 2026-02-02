// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/portafoliio-astro/',
  outDir: './docs',
  site: 'https://92eduardocastillo.github.io',
  build: {
    format: 'file',
    assets: '_astro'
  },
  vite: {
    plugins: [tailwindcss()]
  },
  devToolbar: {
    enabled: true,
    placement: 'bottom-left',
  },
});