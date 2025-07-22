import compress from "@playform/compress";
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

	integrations: [
		compress({
			HTML: {
				"html-minifier-terser": {
					// The following attributes must be set to `false` or Astro's injected CSP will break.
					collapseWhitespace: false,
					minifyCSS: false,
					minifyJS: false,
					minifyURLs: true,
					removeComments: true
				}
			}
		})
	],

	output: "static",

	security: {
		checkOrigin: true
	},

	site: "https://slowp.ke"
});
