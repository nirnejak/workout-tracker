import { fileURLToPath, URL } from "url"

import react from "@vitejs/plugin-react-swc"
import { defineConfig, splitVendorChunkPlugin } from "vite"
import { VitePWA } from "vite-plugin-pwa"
import svgrPlugin from "vite-plugin-svgr"
import viteTsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin(),
    viteTsconfigPaths(),
    splitVendorChunkPlugin(),
    VitePWA({ registerType: "autoUpdate" }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
