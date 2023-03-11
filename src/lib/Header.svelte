<script lang="ts">
	import { onMount } from 'svelte';

	const shuffleArray = (array: { text: string; color: string }[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};
	const brands = shuffleArray([
		{ text: 'fa-node-js', color: '#68A063' },
		{ text: 'fa-square-js', color: '#F0DC4E' },
		{ text: 'fa-html5', color: '#E44D26' },
		{ text: 'fa-css3-alt', color: '#1572B6' },
		{ text: 'fa-discord', color: '#7289DA' },
		{ text: 'fa-linux', color: '#000000' },
		{ text: 'fa-unity', color: '#222C37' },
		{ text: 'fa-sass', color: '#CC6699' },
		{ text: 'fa-raspberry-pi', color: '#C20931' },
		{ text: 'fa-github-alt', color: '#181717' },
		{ text: 'fa-git-alt', color: '#F1502F' },
		{ text: 'fa-bootstrap', color: '#563D7C' },
	]);
	let i: number | undefined;
	onMount(() => {
		i = 0;
		const interval = setInterval(() => {
			if (i !== undefined) i = (i + 1) % brands.length;
		}, 7000);
		return () => clearInterval(interval);
	});
</script>

<div class="wrapper">
	<div class="side" id="left">
		<i class="fa-brands {brands[i]?.text}" style="color: {brands[i]?.color};" />
	</div>
	<div class="middle">willuhmjs</div>
	<div class="side" id="right">
		<i class="fa-solid fa-envelope" style="color: #4A4A4A;" />
		<i class="fa-brands fa-github" style="color: #181717;"/>
		<i class="fa-brands fa-stack-overflow" style="color: #F48024;" />
		<i class="fa-brands fa-discord" style="color: #7289DA;" />
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		padding: 1rem;
		align-items: center;
		border-bottom: 1px solid black;
	}

	.side {
		flex: 1;
	}

	.middle {
		flex: 2;
		font-size: 30px;
		text-align: center;
	}

	#left {
		font-size: 30px;
	}

	#left i {
		margin-left: 5px;
	}

	#right {
		text-align: right;
	}

	#right i {
		margin: 0 0.25rem;
		font-size: 25px;
		vertical-align: middle;
	}
</style>
