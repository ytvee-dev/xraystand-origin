import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, "./public/assets"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@router": path.resolve(__dirname, "./src/router"),
            "@layout": path.resolve(__dirname, "./src/layout"),
            "@domains": path.resolve(__dirname, "./src/domains"),
            "@locales": path.resolve(__dirname, "./src/locales"),
            "@store": path.resolve(__dirname, "./src/store"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
            "@data": path.resolve(__dirname, "./src/data"),
        },
    },
});
