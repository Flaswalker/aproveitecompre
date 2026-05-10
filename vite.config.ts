import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
    tanstackStart: {
        server: { entry: "server" },
    },
    vite: {
        server: {
            allowedHosts: [
                'aproveitecompre.onrender.com',
                'aproveitecompre.com.br',
                'www.aproveitecompre.com.br'
            ]
        },
        preview: {
            allowedHosts: [
                'aproveitecompre.onrender.com',
                'aproveitecompre.com.br',
                'www.aproveitecompre.com.br'
            ]
        }
    }
});
