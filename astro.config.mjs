import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served from the root of a custom domain: no `base` path.
export default defineConfig({
  site: 'https://robertandion.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
