import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import postcssNesting from 'postcss-nesting';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [postcssNesting, tailwind(), autoprefixer()],
    },
  },
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      ignored: ['**/src-tauri/**'],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@tauri': resolve(__dirname, 'src-tauri'),
    },
  },
}));
