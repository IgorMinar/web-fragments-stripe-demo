import { defineConfig } from 'vite';
import { cloudflare } from '@cloudflare/vite-plugin';

export default defineConfig({
	environments: {
		client: {
			build: {
				minify: false,
				sourcemap: true,
				outDir: 'dist/client',
				rollupOptions: {
					input: {
						indexHtml: import.meta.resolve(
							'../../_assets/index.html',
						),
						notFoundHtml: import.meta.resolve(
							'../../_assets/404.html',
						),
					},
				},
			},
		},
	},
	plugins: [cloudflare()],
	server: {
		port: 3003,
		allowedHosts: ["worker.assets"]
	},
});
