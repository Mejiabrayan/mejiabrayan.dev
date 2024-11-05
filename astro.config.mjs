import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import fs from 'fs';
import path from 'path';
import vercel from '@astrojs/vercel/serverless';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';



const themePath = path.join(process.cwd(), 'src/themes/theme.json');
const theme = JSON.parse(fs.readFileSync(themePath, 'utf8'));

export default defineConfig({
  output: 'hybrid',
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
  integrations: [react(), mdx()],
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
