<script>
	import { filepath } from '$lib/filepath';

	/** @type {string} */
	export let title;

	/** @type {string} */
	export let slug;

	/** @type {string} */
	export let description;

	/** @type {string }*/
	export let keywords;

	/** @type {string} */
	export let date;

	let ISODate = new Date(date).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'UTC'
	});

	$filepath = `/src/routes/article/${slug}/+page.md`;
</script>

<svelte:head>
	<title>{title} - willuhmjs.com</title>

	<!-- Meta Tags -->
	<meta name="description" content={description} />
	<meta name="theme-color" content="#08608c" />
	<link rel="canonical" href="https://willuhmjs.com/article/{slug}" />
	<meta name="author" content="William Faircloth" />
	<meta name="keywords" content={keywords} />
	<meta name="robots" content="index,follow" />

	<!-- Open Graph Meta Tags -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{title} - willuhmjs.com" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://willuhmjs.com/article/{slug}" />
	<!--<meta property="og:image" content="{image}" />
  <meta property="og:image:alt" content="{imageAlt}" />-->
	<meta property="og:site_name" content="willuhmjs.com" />
	<meta property="og:locale" content="en_US" />
	<meta property="article:author" content="William Faircloth" />
	<meta property="article:published_time" content={ISODate} />
	<meta property="article:modified_time" content={ISODate} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{title} - willuhmjs.com" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:url" content="https://willuhmjs.com/article/{slug}" />
	<!-- <meta name="twitter:image" content="{image}" />
  <meta name="twitter:image:alt" content="{imageAlt}" /> -->
	<meta name="twitter:site" content="@willuhmjs" />
	<meta name="twitter:creator" content="@willuhmjs" />
</svelte:head>

<h1>{title}</h1>
<slot />
