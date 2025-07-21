import compress from "@playform/compress";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	build: {
		inlineStylesheets: "always"
	},

	integrations: [
		compress({
			HTML: {
				"html-minifier-terser": {
					collapseInlineTagWhitespace: true,
					collapseWhitespace: true,
					minifyCSS: true,
					minifyJS: true,
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
