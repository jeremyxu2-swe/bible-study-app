import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { VitePWA } from 'vite-plugin-pwa';

// `npm run build`        -> installable web app (PWA) in dist/, for hosting (PC + phone)
// `npm run build:single` -> one self-contained HTML file in dist-single/, double-click to open
export default defineConfig(({ mode }) => {
  if (mode === 'single') {
    return {
      plugins: [react(), viteSingleFile()],
      build: { outDir: 'dist-single' },
    };
  }
  return {
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['icon.svg', 'apple-touch-icon.png'],
        manifest: {
          name: 'Lamp & Path — Bible Study',
          short_name: 'Lamp & Path',
          description: 'See the Bible from a high level: books, sections, chapters, people, prophecies and your notes.',
          theme_color: '#14161B',
          background_color: '#14161B',
          display: 'standalone',
          icons: [
            { src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
            { src: 'icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
            { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
            { src: 'icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
          ],
        },
        workbox: { globPatterns: ['**/*.{js,css,html,svg,png,woff2}'], maximumFileSizeToCacheInBytes: 12 * 1024 * 1024 },
      }),
    ],
  };
});
