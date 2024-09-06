import eslint from "@eslint/js";
import astro from "eslint-plugin-astro";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-plugin-prettier/recommended";
import unicorn from "eslint-plugin-unicorn";
import tseslint from "typescript-eslint";

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.stylistic,
	prettier,
	...astro.configs.recommended,
	unicorn.configs["flat/recommended"],
	{
		rules: {
			// getElementsByClassName is faster than querySelectorAll
			"unicorn/prefer-query-selector": "off",
			// Astro likes "Props" for component properties
			"unicorn/prevent-abbreviations": "off"
		}
	},

	perfectionist.configs["recommended-natural"]
);
