import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	build: {
		inlineStylesheets: "always"
	},

	experimental: {
		csp: {
			directives: ["default-src 'none'", "img-src data: 'self'"]
		}
	},

	output: "static",

	security: {
		checkOrigin: true
	},

	site: "https://slowp.ke"
});
