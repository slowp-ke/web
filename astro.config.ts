import astro_sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import astro_compress from "astro-compress";
import astro_uno from "unocss/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [astro_sitemap(), astro_uno(), astro_compress()],
  prefetch: true,
  site: "https://slowp.ke"
});
