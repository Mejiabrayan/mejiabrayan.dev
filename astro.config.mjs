import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import fs from 'fs';
import path from 'path';

// Read the custom theme file
const themePath = path.join(process.cwd(), 'src/themes/theme.json');
const theme = JSON.parse(fs.readFileSync(themePath, 'utf8'));

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
      theme: theme,
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
      wrap: false,
      transformers: [],
    },
  },
});