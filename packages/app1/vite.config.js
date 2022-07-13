import { defineConfig } from 'vite';
import commonViteConfig from '../../vite.config';

export default defineConfig({
  ...commonViteConfig,
  server: {
    ...commonViteConfig.server,
    port: 5010,
  },
});
