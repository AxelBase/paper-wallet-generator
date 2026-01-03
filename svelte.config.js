import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: undefined,
      precompress: false
    }),
    paths: {
      base: '/paper-wallet-generator'
    },
    prerender: {
      entries: ['*'],
      handleHttpError: 'warn'
    }
  }
};

export default config;
