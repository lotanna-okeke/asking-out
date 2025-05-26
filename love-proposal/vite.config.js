import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
      theme: {
        extend: {
          colors: {
            primary: "#FECACA",
            secondary: "#FDF2F8",
            accent: "#BE185D",
          },
          fontFamily: {
            playful: ['"Comic Neue"', "cursive"],
            elegant: ['"Playfair Display"', "serif"],
          },
        },
      },
      plugins: [],
    }),
  ],
})