import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [react()],
  server: {
    port: 6113,
    host: true
  },
  vite: {
    resolve: {
      dedupe: ['react', 'react-dom']
    }
  }
});
