// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/portafoliio-astro/', // <-- Cambia esto por el nombre exacto de tu repo
  outDir: './docs',
  site: 'https://tu-usuario.github.io/portafoliio-astro/',
  vite: {
    plugins: [tailwindcss()]
  },
  devToolbar: {
    enabled: true,
    placement: 'bottom-left',
  },
});