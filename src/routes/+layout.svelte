<script lang="ts">
	import './style.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<meta name="author" content="William Faircloth" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="theme-color" content="#08608c" />
	<meta name="robots" content="index, follow" />
</svelte:head>

<Header />
<main>
	<slot />
</main>
<Footer />
