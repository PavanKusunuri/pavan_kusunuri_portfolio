// vite.config.js
import { defineConfig } from "file:///C:/Users/pavan/OneDrive/Desktop/pavan/portfolio/pavan_kusunuri_portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/pavan/OneDrive/Desktop/pavan/portfolio/pavan_kusunuri_portfolio/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  build: {
    target: "es2018",
    // Split vendor and heavy 3D libs into separate chunks for better caching
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("three") || id.includes("@react-three")) {
              return "three-vendor";
            }
            if (id.includes("react") || id.includes("react-dom")) {
              return "react-vendor";
            }
            if (id.includes("framer-motion")) {
              return "motion-vendor";
            }
            return "vendor";
          }
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxwYXZhblxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHBhdmFuXFxcXHBvcnRmb2xpb1xcXFxwYXZhbl9rdXN1bnVyaV9wb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHBhdmFuXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxccGF2YW5cXFxccG9ydGZvbGlvXFxcXHBhdmFuX2t1c3VudXJpX3BvcnRmb2xpb1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvcGF2YW4vT25lRHJpdmUvRGVza3RvcC9wYXZhbi9wb3J0Zm9saW8vcGF2YW5fa3VzdW51cmlfcG9ydGZvbGlvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIHRhcmdldDogXCJlczIwMThcIixcclxuICAgIC8vIFNwbGl0IHZlbmRvciBhbmQgaGVhdnkgM0QgbGlicyBpbnRvIHNlcGFyYXRlIGNodW5rcyBmb3IgYmV0dGVyIGNhY2hpbmdcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XHJcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJub2RlX21vZHVsZXNcIikpIHtcclxuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwidGhyZWVcIikgfHwgaWQuaW5jbHVkZXMoXCJAcmVhY3QtdGhyZWVcIikpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gXCJ0aHJlZS12ZW5kb3JcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJyZWFjdFwiKSB8fCBpZC5pbmNsdWRlcyhcInJlYWN0LWRvbVwiKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcInJlYWN0LXZlbmRvclwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcyhcImZyYW1lci1tb3Rpb25cIikpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gXCJtb3Rpb24tdmVuZG9yXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFwidmVuZG9yXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFosU0FBUyxvQkFBb0I7QUFDdmIsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUE7QUFBQSxJQUVSLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGFBQWEsSUFBSTtBQUNmLGNBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUMvQixnQkFBSSxHQUFHLFNBQVMsT0FBTyxLQUFLLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDdkQscUJBQU87QUFBQSxZQUNUO0FBQ0EsZ0JBQUksR0FBRyxTQUFTLE9BQU8sS0FBSyxHQUFHLFNBQVMsV0FBVyxHQUFHO0FBQ3BELHFCQUFPO0FBQUEsWUFDVDtBQUNBLGdCQUFJLEdBQUcsU0FBUyxlQUFlLEdBQUc7QUFDaEMscUJBQU87QUFBQSxZQUNUO0FBQ0EsbUJBQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
