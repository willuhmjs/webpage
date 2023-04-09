<script>
	import { filepath } from '$lib/filepath';

	/** @type {string} */
	export let title;

	/** @type {string} */
	export let slug;

	/** @type {string} */
	export let description;

	$filepath = `/src/routes/article/${slug}/+page.md`;
</script>

<svelte:head>
	<title>{title} - willuhmjs.com</title>

	<meta name="description" content="{description}" />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://willuhmjs.com/article/learning-to-code" />
	<meta property="og:title" content="{title} - willuhmjs.com" />
	<meta property="og:description" content="{description}" />
	<meta property="og:image" content="" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="willuhmjs.com" />
	<meta property="twitter:url" content="https://willuhmjs.com/article/learning-to-code" />
	<meta name="twitter:title" content="{title} - willuhmjs.com" />
	<meta name="twitter:description" content="{description}" />
	<meta name="twitter:image" content="" />
</svelte:head>

<h1>{title}</h1>
<slot />
