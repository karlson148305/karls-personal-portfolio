import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      // Two copies of the same app: index.html (French) and en.html (English),
      // so each language has its own title and link preview.
      input: {
        main: path.resolve(__dirname, "index.html"),
        en: path.resolve(__dirname, "en.html"),
      },
    },
  },
}));
