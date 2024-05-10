import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['astro.build'],
  },
  integrations: [tailwind({ applyBaseStyles: false }), react()],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      theme: 'one-dark-pro',
      tailwind: true,
      // Alternatively, provide multiple themes
      // See note below for using dual light/dark themes
      // experimentalThemes: {
      //   light: 'github-light',
      //   dark: 'github-dark',
      // },
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://shiki.style/languages
      langs: ['typescript', 'javascript', 'tsx', 'jsx', 'js', 'css', 'html', 'go', 'json', 'yaml', 'markdown'],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      transformers: [],
    },
  },
});
