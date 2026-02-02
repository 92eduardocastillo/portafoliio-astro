// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/portafoliio-astro/', // <-- Cambia esto si tu repo tiene otro nombre
  outDir: 'docs',
  vite: {
    plugins: [tailwindcss()]
  },
  devToolbar: {
    enabled: true,
    placement: 'bottom-left',
  },
});