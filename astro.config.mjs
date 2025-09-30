import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://djafsia.github.io',
  base: '/PortfolioEben/',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
