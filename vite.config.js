import { defineConfig } from "vite";
import { resolve } from 'path';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html')
            }
        },
        outDir: resolve(__dirname, 'dist')
    },
    server: {
        port: 3000,
    }
})