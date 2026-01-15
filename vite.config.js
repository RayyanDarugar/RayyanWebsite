import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages - assumes repo name is 'rayyan-website' or similar
  // If deployed to user.github.io, this should be '/'
  // If deployed to user.github.io/repo-name, this should be '/repo-name/'
  // For now we'll surmise based on standard usage or user instructions.
  // User asked for "GitHub Pages–ready build output".
  // Using './' is often safer for relative paths in generic deployments.
  base: './',
})
