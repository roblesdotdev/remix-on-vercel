import { vitePlugin as remix } from '@remix-run/dev'
import { vercelPreset } from '@vercel/remix/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const ENV_MODE = process.env.NODE_ENV

export default defineConfig({
  build: {
    cssMinify: ENV_MODE === 'production',
    sourcemap: true,
  },
  plugins: [
    remix({ presets: [vercelPreset()], serverModuleFormat: 'esm' }),
    tsconfigPaths(),
  ],
})
