import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: { "process.env": process.env },
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  server: { open: "/index.html" },
  build: {
    outDir: "popup",
    rollupOptions: {
      output: {
        entryFileNames: `popup.js`,
        chunkFileNames: `popup.js`,
        assetFileNames: `popup.[ext]`,
      },
    },
  },
});
