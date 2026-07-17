import { fileURLToPath, URL } from 'node:url';
import { copyFile, mkdir } from 'node:fs/promises';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));
const outputRoot = fileURLToPath(new URL('./dist/', import.meta.url));

function sitesStaticAdapter() {
  return {
    name: 'sites-static-adapter',
    apply: 'build',
    async closeBundle() {
      await Promise.all([
        mkdir(`${outputRoot}server`, { recursive: true }),
        mkdir(`${outputRoot}.openai`, { recursive: true }),
      ]);
      await Promise.all([
        copyFile(
          fileURLToPath(new URL('./worker/index.js', import.meta.url)),
          `${outputRoot}server/index.js`,
        ),
        copyFile(
          fileURLToPath(new URL('./.openai/hosting.json', import.meta.url)),
          `${outputRoot}.openai/hosting.json`,
        ),
      ]);
    },
  };
}

export default defineConfig({
  plugins: [react(), sitesStaticAdapter()],
  cacheDir: 'node_modules/.vite',
  server: {
    fs: {
      allow: [projectRoot],
      strict: true,
    },
  },
  preview: {
    host: '127.0.0.1',
  },
});
