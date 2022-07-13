import vitePluginReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import inliner from '@vgrid/sass-inline-svg';
import brotli from "rollup-plugin-brotli";
import path from "path";

export default defineConfig(({ mode }) => ({
  build: {
    outDir: 'build',
    sourcemap: true,
    chunkSizeWarningLimit: 99999,
  },
  server: {
    hmr: true,
    open: true,
  },
  resolve: {
    alias: {
      '~@blueprintjs/colors': '@blueprintjs/colors',
      '~@blueprintjs/icons': '@blueprintjs/icons',
      '~@blueprintjs/core': '@blueprintjs/core',
      '~@blueprintjs/select': '@blueprintjs/select',
      '~@blueprintjs/datetime': '@blueprintjs/datetime',
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        functions: {
          'svg-icon($path, $selectors: null)': inliner(
            path.join(__dirname, './packages/shared/src/blueprint-icons'), // Replaced path to icons
            { optimize: true, encodingFormat: 'uri' }
          )
        }
      }
    },
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: atRule => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            },
          },
        },
      ],
    },
  },
  plugins: [
    vitePluginReact(),
    tsconfigPaths(),
    mode === "production" ? brotli() : undefined,
  ],
}));
