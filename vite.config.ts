import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 5000,
    hmr: { overlay: false },
  },

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },

  

  build: {
    target: "es2018",
    sourcemap: false,
    chunkSizeWarningLimit: 800,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },

    minify: "esbuild",
  },

  optimizeDeps: {
    include: ["react", "react-dom", "@tanstack/react-query"],
  },
});