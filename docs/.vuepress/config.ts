import { defaultTheme, defineUserConfig, viteBundler } from 'vuepress';

export default defineUserConfig({
  base: '/',
  title: 'alta.',
  description:
    'A new coworking space with spectacular views, excellent wifi, P2P cryptocurrency exchange, and a spectacular view. FREE 60 minute pass for first time customers, ask at reception!',

  bundler: viteBundler({
    // vite bundler options here
  }),
  theme: defaultTheme({
    // default theme options here
  }),
});
