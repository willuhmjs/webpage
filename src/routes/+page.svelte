<script>
	import Header from '../lib/Header.svelte';
	import Repos from '../lib/Repos.svelte';
	import About from '../lib/About.svelte';
	import BlogPosts from '../lib/BlogPosts.svelte';
</script>

<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
	integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
	crossorigin="anonymous"
	referrerpolicy="no-referrer"
/>

<div class="wrapper">
	<Header />
	<div class="body">
		<About />
		<BlogPosts />
	</div>
</div>

<style>
	.wrapper {
		margin: auto;
		max-width: 900px;
	}

	.body {
		max-width: 600px;
		margin: 2rem auto;
	}

</style>
