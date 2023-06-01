import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/champion": {
        target: "https://apilolrandom.onrender.com",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
