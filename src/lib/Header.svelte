<script lang="ts">
	import { onMount } from 'svelte';
	import theme from './Theme';

	const shuffleArray = (array: { text: string; color: string }[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};
	const brands = shuffleArray([
  { text: 'fa-node-js', color: '104, 160, 99' },
  { text: 'fa-square-js', color: '240, 220, 78' },
  { text: 'fa-html5', color: '228, 77, 38' },
  { text: 'fa-css3-alt', color: '21, 114, 182' },
  { text: 'fa-discord', color: '114, 137, 218' },
  { text: 'fa-linux', color: '0, 0, 0' },
  { text: 'fa-unity', color: '34, 44, 55' },
  { text: 'fa-sass', color: '204, 102, 153' },
  { text: 'fa-raspberry-pi', color: '194, 9, 49' },
  { text: 'fa-github-alt', color: '24, 23, 23' },
  { text: 'fa-git-alt', color: '241, 80, 47' },
  { text: 'fa-bootstrap', color: '86, 61, 124' }
]);
	let i: number | undefined;
	onMount(() => {
		i = 0;
		$theme = brands[i]?.color;
		document.documentElement.style.setProperty('--brand-color', `rgb(${$theme})`); // Set CSS variable
		const interval = setInterval(() => {
			if (i !== undefined) {
				i = (i + 1) % brands.length;
				$theme = brands[i]?.color;
				document.documentElement.style.setProperty('--brand-color', `rgb(${$theme})`); // Update CSS variable
			}
		}, 7000);
		return () => clearInterval(interval);
	});
</script>

<div class="wrapper">
	<div class="side" id="left">
		<i class="fa-brands {brands[i]?.text}" style="color: var(--brand-color);" />
	</div>
	<div id="center" style="color: var(--brand-color);">willuhmjs</div>
	<div class="side" id="right">
		<a href="mailto:willuhmjs@gmail.com" target="_blank"
			><i class="fa-solid fa-envelope" style="color: var(--brand-color);" /></a
		>
		<a href="https://github.com/willuhmjs" target="_blank"
			><i class="fa-brands fa-github" style="color: var(--brand-color);" /></a
		>
		<a href="https://stackoverflow.com/users/21373280/willuhmjs" target="_blank"
			><i class="fa-brands fa-stack-overflow" style="color: var(--brand-color);" /></a
		>
		<a href="https://discord.com/users/969629831300005918" target="_blank"
			><i class="fa-brands fa-discord" style="color: var(--brand-color);" /></a
		>
	</div>
</div>

<style>
	/* Define CSS variable */
	:root {
		--brand-color: #68a063;
	}

	.wrapper {
		display: flex;
		padding: 1rem;
		align-items: center;
		border-bottom: 1px solid #1a1a1a;
		cursor: default;
	}

	.side {
		flex: 1;
	}

	#center {
		flex: 2;
		font-size: 30px;
		text-align: center;
		transition: color 0.25s ease-in-out;
		display: inline-block;
		user-select: none;
	}

	#left {
		font-size: 30px;
	}

	#left i {
		margin-left: 5px;
		vertical-align: middle;
	}

	#right {
		text-align: right;
	}

	#right i {
		margin: 0 0.25rem;
		font-size: 25px;
		vertical-align: middle;
	}

	a i:hover {
		/* do something */
		filter: contrast(0.5);
	}

	i {
		transition: color 0.25s ease-in-out;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
</style>
