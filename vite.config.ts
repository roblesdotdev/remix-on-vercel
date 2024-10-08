import { vitePlugin as remix } from '@remix-run/dev'
import { installGlobals } from '@remix-run/node'
import { vercelPreset } from '@vercel/remix/vite'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { checkEnv } from './app/utils/env.server'

installGlobals()

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), '')
  checkEnv(env)
  return defineConfig({
    build: {
      cssMinify: mode === 'production',
      sourcemap: true,
    },
    plugins: [
      remix({ presets: [vercelPreset()], serverModuleFormat: 'esm' }),
      tsconfigPaths(),
    ],
  })
}
