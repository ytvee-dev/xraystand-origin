// vite.config.ts
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import mdx from '@mdx-js/rollup';
import remarkGfm from "remark-gfm";
import rehypePrism from 'rehype-prism-plus';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
    plugins: [
        {
            ...mdx({
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypePrism],
            }),
            enforce: 'pre'
        },
        react({
            include: [/\.[jt]sx?$/, /\.mdx?$/]
        }),
        visualizer({
            filename: 'dist/stats.html',
            open: true,
            gzipSize: true,
            brotliSize: true
        })
    ],
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.md', '.mdx'],
        alias: {
            "@assets": path.resolve(__dirname, "./public/assets"),
            "@modules": path.resolve(__dirname, "./src/modules"),
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
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom'],
                    mui: ['@mui/material', '@mui/system', '@emotion/react', '@emotion/styled'],
                    highlight: ['react-syntax-highlighter', 'highlight.js'],
                }
            }
        }
    }
});
