import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['astro.build'],
  },
  integrations: [tailwind({ applyBaseStyles: false }), react()],
});
