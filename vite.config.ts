import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        short_name: 'One',
        name: 'One',
        icons: [
          {
            src: '/one/one-192x192.svg',
            type: 'image/svg+xml',
            sizes: '192x192',
          },
          {
            src: '/one/one-256x256.svg',
            type: 'image/svg+xml',
            sizes: '256x256',
          },
          {
            src: '/one/one-384x384.svg',
            type: 'image/svg+xml',
            sizes: '384x384',
          },
          {
            src: '/one/one-512x512.svg',
            type: 'image/svg+xml',
            sizes: '512x512',
          },
        ],
        start_url: '/one/',
        background_color: '#242424',
        display: 'standalone',
        theme_color: '#ff0057',
        description:
          "One classic eye looks. Budge-proof color that's easy to use, glides seamlessly, and stays put.",
      },
    }),
  ],
  base: '/one/',
});
