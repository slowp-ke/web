import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	build: {
		inlineStylesheets: "always"
	},

	output: "static",

	security: {
		checkOrigin: true,
		csp: true
	},

	site: "https://slowp.ke"
});
