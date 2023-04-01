<script>
	import { filepath } from '$lib/filepath';
</script>

<footer>
	<a href="https://github.com/willuhmjs/webpage/blob/main{$filepath}" target="_blank"
		><i class="fa-solid fa-pen-to-square" /> fix typo</a
	>
	<a href="https://github.com/willuhmjs/" target="_blank"
		><i class="fa-brands fa-github" /> willuhmjs</a
	>
</footer>

<style>
	footer {
		display: flex;
		column-gap: 2ch;
		justify-content: center;
		flex-wrap: wrap;
		padding: 1ch;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
	}

	i {
		margin-right: 3px;
	}

</style>
