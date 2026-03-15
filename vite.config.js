import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Vercel/Netlify: root. GitHub Pages: /my-vide-app/
  base:
    process.env.VERCEL || process.env.NETLIFY
      ? "/"
      : process.env.NODE_ENV === "production"
        ? "/my-vide-app/"
        : "/",
  server: {
    port: 5173
  }
});

