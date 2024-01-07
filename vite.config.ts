import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default ({ command }) => {
  // Determina si el comando es 'build' (producción)
  const isProduction = command === 'build';

  // Ruta base para desarrollo
  const baseDev = '/';
  // Ruta base para producción
  const baseProd = '/exercise-tracker-app/';

  return defineConfig({
    base: isProduction ? baseProd : baseDev,
    plugins: [react()],
  });
};
