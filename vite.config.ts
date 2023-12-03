import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import envCompatible from 'vite-plugin-env-compatible';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/',
	plugins: [react(), envCompatible()],
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
	},
	optimizeDeps: {
		force: true,
		esbuildOptions: {
			loader: {
				'.ts': 'tsx',
			},
		},
	},
	build: {
		outDir: 'build',
		minify: 'terser',
		chunkSizeWarningLimit: 1600,
		manifest: true,
		sourcemap: false,
		reportCompressedSize: true,
		rollupOptions: {
			output: {
				entryFileNames: 'js/[name].js',
				chunkFileNames: 'js/[name].js',
				assetFileNames: 'assets/[name].[ext]',
			},
		},
	},
	publicDir: 'public',
});
