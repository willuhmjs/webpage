<script>
	const raw = import.meta.glob('../../routes/article/**/*.md', { eager: true });
</script>

<section>
	<ul>
		{#each Object.entries(raw) as [_, data] (data)}
			<li>
				<h2><a href="/article/{data.metadata.slug}">{data.metadata.title}</a></h2>
				<p class="subtitle">
					<time datetime={data.metadata.datetime}
						>{new Date(data.metadata.date).toLocaleDateString('en-US', {
							month: 'short',
							day: 'numeric',
							year: 'numeric',
							timeZone: 'UTC'
						})}</time
					>
				</p>
			</li>
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
