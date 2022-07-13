import { defineConfig } from 'vite';
import commonViteConfig from '../../vite.config';

export default defineConfig(env => {
  const cfg = commonViteConfig(env);

  return {
    ...cfg,
    server: {
      ...cfg.server,
      port: 5010,
    },
  };
});
