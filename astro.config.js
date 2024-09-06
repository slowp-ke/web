import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],

	output: "static",

	security: {
		checkOrigin: true
	},
	site: "https://slowp.ke"
});
