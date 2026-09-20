import eslint from "@eslint/js";
import astro from "eslint-plugin-astro";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-plugin-prettier/recommended";
import unicorn from "eslint-plugin-unicorn";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
	eslint.configs.recommended,
	tseslint.configs.stylistic,
	prettier,
	...astro.configs.recommended,
	perfectionist.configs["recommended-natural"],
	unicorn.configs.recommended,
	{
		rules: {
			"unicorn/filename-case": [
				"error",
				{
					cases: {
						kebabCase: true,
						pascalCase: true
					}
				}
			],
			// Astro likes "Props" for component properties
			"unicorn/name-replacements": "off",
			// getElementsByClassName is faster than querySelectorAll
			"unicorn/prefer-query-selector": "off"
		}
	}
);
