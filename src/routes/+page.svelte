<script>
	import Header from '../lib/Header.svelte';
	import Repos from '../lib/Repos.svelte';
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
	<Repos />
</div>

<style>
	.wrapper {
		margin: auto;
		max-width: 900px;
	}
</style>
