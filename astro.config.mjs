import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite'; // Đảm bảo dòng này không bị lỗi đỏ
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: "server",
  adapter: vercel(),
  vite: {
    plugins: [tailwind()],
  },
});