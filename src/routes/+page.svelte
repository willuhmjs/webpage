<script>
	import BlogPosts from '$lib/blog/BlogPosts.svelte';
	import { filepath } from '$lib/filepath';
	$filepath = '/src/routes/+page.svelte';
</script>

<svelte:head>
	<title>willuhmjs.com</title>
	<meta name="description" content="A software development blog by @willuhmjs." />
	<meta name="keywords" content="blog, articles, technology, coding, programming, developer, willuhmjs" />
	<link rel="canonical" href="https://www.willuhmjs.com/" />

	<!-- Open Graph Meta Tags -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="willuhmjs.com" />
	<meta property="og:description" content="A software development blog by @willuhmjs." />
	<meta property="og:url" content="https://www.willuhmjs.com/" />
	<meta property="og:image" content="https://willuhmjs.com/pfp.png" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="willuhmjs.com" />
	<meta name="twitter:description" content="A software development blog by @willuhmjs." />
	<meta name="twitter:image" content="https://willuhmjs.com/pfp.png" />
	<meta name="twitter:site" content="@willuhmjs" />
	<meta name="twitter:creator" content="@willuhmjs" />
</svelte:head>

<BlogPosts />
