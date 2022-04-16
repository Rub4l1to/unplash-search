import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@/assets',
        replacement: path.resolve(__dirname, 'src/assets'),
      },
      {
        find: '@/components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '@/context',
        replacement: path.resolve(__dirname, 'src/context'),
      },
      {
        find: '@/helpers',
        replacement: path.resolve(__dirname, 'src/helpers'),
      },
      {
        find: '@/hooks',
        replacement: path.resolve(__dirname, 'src/hooks'),
      },
      {
        find: '@/interfaces',
        replacement: path.resolve(__dirname, 'src/interfaces'),
      },
      {
        find: '@/styles',
        replacement: path.resolve(__dirname, 'src/styles'),
      },
      {
        find: '@/screens',
        replacement: path.resolve(__dirname, 'src/screens'),
      },
    ],
  },
  plugins: [react()],
});
