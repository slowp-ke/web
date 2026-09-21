import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	build: {
		inlineStylesheets: "always"
	},

	output: "static",

	security: {
		csp: {
			algorithm: "SHA-256",
			directives: ["default-src 'self'", "img-src 'self' data:"],
			scriptDirective: { resources: ["'self'"] },
			styleDirective: { resources: ["'self'"] }
		}
	},

	site: "https://slowp.ke"
});
