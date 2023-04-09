<script>
	import Card from '$lib/about/Card.svelte';
	import Bio from '$lib/about/Bio.svelte';
	import { filepath } from '$lib/filepath';
	$filepath = '/src/routes/about/+page.svelte';
</script>
<svelte:head>
	<title>About - willuhmjs.com</title>
	<meta name="description" content="Some information about me, @willuhmjs." />
	<meta name="keywords" content="blog, articles, technology, coding, programming, developer" />
	<meta name="author" content="William Faircloth" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="theme-color" content="#08608c" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://www.willuhmjs.com/" />

	<!-- Open Graph Meta Tags -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="About - willuhmjs.com" />
	<meta property="og:description" content="Some information about me, @willuhmjs." />
	<meta property="og:url" content="https://www.willuhmjs.com/" />
	<!--<meta property="og:image" content="" />-->

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="About - willuhmjs.com" />
	<meta name="twitter:description" content="Some information about me, @willuhmjs." />
	<!--<meta name="twitter:image" content="https://www.myblog.com/images/twitter-image.jpg" />-->
	<meta name="twitter:site" content="@willuhmjs" />
  	<meta name="twitter:creator" content="@willuhmjs" />
</svelte:head>
<Card />
<Bio />
