import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "Ejercicios-React",

  plugins: [react()],
  server: {
    host: "localhost",
    port: 5173,
    hmr: {
      host: "127.0.0.1",
      port: 5173,
      protocol: "ws",
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
});
