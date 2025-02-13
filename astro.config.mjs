import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import fs from 'fs';
import path from 'path';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import db from '@astrojs/db';
import { envField } from 'astro/config';

const themePath = path.join(process.cwd(), 'src/themes/theme.json');
const theme = JSON.parse(fs.readFileSync(themePath, 'utf8'));

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
      speedInsights: true,
    },
  }),

  image: {
    domains: ['astro.build'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), mdx(), db()],
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
  env: {
    schema: {
      ASTRO_DB_REMOTE_URL: envField.string({
        context: 'server',
        access: 'public',
        optional: true, // Make optional to allow local development
      }),
      ASTRO_DB_APP_TOKEN: envField.string({
        context: 'server',
        access: 'secret', // Keep this secret since it's an auth token
        optional: true, // Make optional to allow local development
      }),
    },
  },
});
