import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Adiciona a propriedade base para o deploy
  // Para GitHub Pages, use o nome do seu repositório, por exemplo: 
  // base: '/nome-do-seu-repositorio/'
  // Para Netlify, geralmente '/' é suficiente, ou pode ser omitido se for a raiz
  base: '/', 
})


