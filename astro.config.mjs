import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt-br'],
  },
  image: {
    domains: ['astro.build'],
  },
  integrations: [tailwind({ applyBaseStyles: false }), react()],
  markdown: {
    shikiConfig: {
      theme: 'vitesse-dark',
      tailwind: true,
      langs: [
        'typescript',
        'javascript',
        'tsx',
        'jsx',
        'js',
        'css',
        'html',
        'go',
        'json',
        'yaml',
        'markdown',
      ],
      wrap: true,
      transformers: [],
    },
  },
});
