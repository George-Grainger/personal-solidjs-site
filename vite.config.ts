import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import mdPlugin, { Mode } from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [mdPlugin({ mode: [Mode.HTML] }), solidPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  optimizeDeps: {
    exclude: ['my-lib'],
  },
});
