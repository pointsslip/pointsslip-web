import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 8080,
    cors: {
      origin: "https://points.delphigamerz.xyz", // Allow access from this origin
      methods: ['GET', 'POST'], // Specify allowed methods
      allowedHeaders: ['Content-Type'], // Specify allowed headers
    },
    allowedHosts: [
      'points.delphigamerz.xyz', // Add the host to the allowed hosts
      'delphigamerz.xyz',
      'aricummings.com',
      'points.aricummings.com',
    ],
  },
  plugins: [
    react(),
    mode === 'development',
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
