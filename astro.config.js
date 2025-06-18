import compress from "@playform/compress";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	build: {
		inlineStylesheets: "always"
	},

	integrations: [compress()],

	output: "static",

	security: {
		checkOrigin: true
	},

	site: "https://slowp.ke"
});
