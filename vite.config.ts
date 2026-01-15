import { fileURLToPath, URL } from "url"

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa"
import svgrPlugin from "vite-plugin-svgr"
import viteTsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    svgrPlugin(),
    viteTsconfigPaths(),
    VitePWA({ registerType: "autoUpdate" }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
