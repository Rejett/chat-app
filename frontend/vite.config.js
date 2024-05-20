import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        configure: (proxy) => {
          proxy.on("error", (err) => {
            console.error("Proxy error:", err);
          });
          proxy.on("proxyReq", (req) => {
            console.log("Proxying request:", req.url);
          });
          proxy.on("proxyRes", (proxyRes) => {
            console.log("Received response from target:", proxyRes.statusCode);
          });
        },
      },
    },
  },
});
