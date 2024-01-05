// vite.config.js
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/react_app/dist/', // Configura la ruta base de tu aplicación
  plugins: [react()],
});
