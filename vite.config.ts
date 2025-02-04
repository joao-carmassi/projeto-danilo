import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig(({ mode }) => ({
  base: "/", // Ajuste conforme o host
  plugins: [
    vue(),
    ...(mode === "development"
      ? // eslint-disable-next-line @typescript-eslint/no-require-imports
        [require("vite-plugin-vue-devtools").default()]
      : []),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}));
