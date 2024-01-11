// utils/routes.ts
export const baseUrl = import.meta.env.VITE_PUBLIC_PATH;

export const routes = {
  home: baseUrl,
  about: `${baseUrl}about`,
};