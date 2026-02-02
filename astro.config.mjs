// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: './',
  outDir: './docs',
  site: 'https://92eduardocastillo.github.io/portafoliio-astro/',
  build: {
    format: 'file'
  },
  vite: {
    plugins: [tailwindcss()]
  },
  devToolbar: {
    enabled: true,
    placement: 'bottom-left',
  },
});