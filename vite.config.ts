import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';

function htmlSiteUrl(mode: string) {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const site = (env.VITE_SITE_URL || '').replace(/\/$/, '');
  return {
    name: 'html-site-url',
    transformIndexHtml(html: string) {
      return html.replaceAll('%VITE_SITE_URL%', site);
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    htmlSiteUrl(mode),
    react(),
    tailwindcss(),
    ...(process.env.npm_lifecycle_event === 'analyze'
      ? [
          visualizer({
            filename: 'dist/stats.json',
            template: 'raw-data',
            gzipSize: true,
          }),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
