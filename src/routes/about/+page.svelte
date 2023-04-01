<script>
	import Card from '$lib/about/Card.svelte';
	import Bio from '$lib/about/Bio.svelte';
	import { filepath } from '$lib/filepath';
	$filepath = '/src/routes/about/+page.svelte';
</script>

<Card />
<Bio />
