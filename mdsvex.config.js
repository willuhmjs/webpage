import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import codeTitle from 'rehype-code-titles';
import rehypePrettyCode from 'rehype-pretty-code';

import dark from './themes/dark.json' assert { type: "json" };
import light from './themes/light.json' assert { type: "json" };

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	highlight: false,
	layout: 'src/lib/blog/BlogLayout.svelte',

	remarkPlugins: [],
	rehypePlugins: [
		codeTitle,
		[
			rehypePrettyCode,
			{
				theme: {
					dark: dark,
					light: light
				}
			}
		]
	]
});

export default config;