import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: ['**/*.jsx', '**/*.js', '**/*.svg'], // Обрабатываем SVG как компоненты
    }),
  ],
  resolve: {
    alias: {
      '@': '/src', // Алиас для удобных импортов
    },
  },
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg'], // Подключаем типы файлов
});