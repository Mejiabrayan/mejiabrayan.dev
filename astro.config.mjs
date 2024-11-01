import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import fs from 'fs';
import path from 'path';
import vercel from '@astrojs/vercel/serverless';
import tailwindcss from '@tailwindcss/vite';



const themePath = path.join(process.cwd(), 'src/themes/theme.json');
const theme = JSON.parse(fs.readFileSync(themePath, 'utf8'));

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
 
  image: {
    domains: ['astro.build'],
  },
  vit: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
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
    TURSO_DATABASE_URL: process.env.TURSO_DATABASE_URL,
    TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN,
  },
});
