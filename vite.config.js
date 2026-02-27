import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Guarantee a single React instance across all chunks, preventing
    // "Cannot read properties of undefined (reading 'useLayoutEffect')"
    dedupe: ["react", "react-dom", "react-dom/client"],
  },
  build: {
    target: "es2018",
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          // 1. React core — no dependencies on any other vendor chunk.
          //    Must be evaluated before anything that calls React APIs.
          if (
            id.includes("/react/") ||
            id.includes("/react-dom/") ||
            id.includes("/scheduler/") ||
            id.includes("/react-reconciler/")
          ) {
            return "react-vendor";
          }

          // 2. Pure Three.js math/WebGL library — no React dependency.
          //    Keeping this separate from @react-three/* breaks the
          //    circular cross-chunk reference that causes useLayoutEffect
          //    to be read from an uninitialised React module object.
          if (id.includes("/three/")) {
            return "three-vendor";
          }

          // 3. React-Three ecosystem — depends on both react-vendor and
          //    three-vendor, but is itself never imported by either, so
          //    the dependency graph is a clean DAG with no cycles.
          if (
            id.includes("/@react-three/") ||
            id.includes("/@react-spring/") ||
            id.includes("/maath/") ||
            id.includes("/troika-") ||
            id.includes("/suspend-react/") ||
            id.includes("/its-fine/")
          ) {
            return "r3f-vendor";
          }

          // 4. Animation
          if (id.includes("/framer-motion/")) {
            return "motion-vendor";
          }

          return "vendor";
        },
      },
    },
  },
});
