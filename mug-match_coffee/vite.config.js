import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/mug-match_coffee/",  
  build: {
    outDir: '../dist',
  },
});
