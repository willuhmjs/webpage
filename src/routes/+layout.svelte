<script lang="ts">
	import './style.css';
	import Header from '$lib/Header.svelte';

	import { filepath } from '$lib/filepath';
</script>

<Header />
<main>
	<slot />
</main>