<script lang="ts">
	import { onMount } from 'svelte';
	import theme from './Theme';
	const colors = {
		HTML: '#e34c26',
		Svelte: '#ff3e00',
		JavaScript: '#f1e05a',
		TypeScript: '#3178c6',
		ShaderLab: '#222c37',
		'C#': '#178600',
		CSS: '#563d7c',
		'C++': '#f34b7d',
		Python: '#3572A5',
		Astro: '#ff5a03',
		EJS: '#a91e50'
	};
	let unsortedRepos;
	async function updateRepos(page: number = 1) {
		const data = await fetch(
			'https://api.github.com/users/willuhmjs/repos?per_page=9&page=1&sort=updated'
		);
		unsortedRepos = await data.json();
	}

	onMount(updateRepos);
</script>

<!-- right aligned dropdown for sort type -->
<h2 class="header">Repositories</h2>
<div class="wrapper">
	{#if unsortedRepos}
		{#each unsortedRepos as repo}
			<a href={repo.html_url} target="_blank">
				<div
					class="repoItem"
					style="border-bottom: 4px solid {colors[repo.language] || 'transparent'};"
				>
					<h3>{repo.name}</h3>
					<p>{repo.description || 'No repository description.'}</p>
					<div class="links">
						<a href={repo.html_url + '/stargazers'} target="_blank">
							<i class="fas fa-star" />
							{repo.stargazers_count}
						</a>
						<a href={repo.html_url + '/issues'} target="_blank">
							<i class="fas fa-exclamation-circle" />
							{repo.open_issues_count}
						</a>
						<a href={repo.html_url + '/network/members'} target="_blank">
							<i class="fas fa-code-branch" />
							{repo.forks_count}
						</a>
					</div>
				</div>
			</a>
		{/each}
	{/if}
</div>

<style>
	.repoItem {
		border-radius: 0.5rem;
		padding: 1rem;
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
		height: 9rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transition: box-shadow 0.2s ease-in-out;
	}

	.repoItem:hover {
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
	}

	.repoItem h3 {
		margin-top: 0;
		margin-bottom: 0.5rem;
	}

	.repoItem p {
		margin-top: 0;
		margin-bottom: 0.5rem;
		max-height: 6rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	.links {
		margin-top: auto;
		width: 100%;
		font-size: 17px;
	}

	.links a {
		margin: 0 0.1rem;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.links a:hover {
		color: #999;
	}

	.wrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin: auto;
		margin-bottom: 2rem;
	}

	.header {
		margin-top: 2rem;
	}
</style>
