<script>
	import { dataset_dev } from 'svelte/internal';

	const bruh = import.meta.glob('../../routes/article/**/*.md');
</script>

<section>
	<ul>
		{#each Object.entries(bruh) as [_, resolve] (resolve)}
			{#await resolve()}
				<p>Loading Posts...</p>
			{:then data}
				<li>
					<h2><a href="/article/{data.metadata.slug}">{data.metadata.title}</a></h2>
					<p class="subtitle">
						<time datetime={data.metadata.datetime}>{data.metadata.date}</time>
					</p>
				</li>
			{:catch error}
				<p>{error.message}</p>
			{/await}
		{/each}
	</ul>
</section>

<style>
	ul {
		list-style: none;
		margin-left: 0;
		padding: 0;
	}

	li {
		margin-top: 1.5rem;
	}

	li h2 {
		margin-bottom: 17px;
	}

	.subtitle {
		margin-bottom: 10px;
		color: #737373;
	}
</style>
