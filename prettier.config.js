/** @type {import("prettier").Config} */
export default {
	endOfLine: "lf",
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro"
			}
		}
	],
	plugins: ["prettier-plugin-astro"],
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "none",
	useTabs: true
};
