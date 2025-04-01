import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	build: {
		inlineStylesheets: "always"
	},

	output: "static",

	security: {
		checkOrigin: true
	},

	site: "https://slowp.ke",
	vite: {
		plugins: [tailwindcss()]
	}
});
