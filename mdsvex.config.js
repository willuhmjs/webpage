import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import codeTitle from 'rehype-code-titles';
import rehypePrettyCode from 'rehype-pretty-code';

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
				/* todo find a way to make this work with dark theme */
				theme: 'github-light'
			}
		]
	]
});

export default config;