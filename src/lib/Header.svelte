<div class="wrapper">
	<div class="side" id="left">willuhmjs</div>
	<div class="side" id="right">
		<a>about</a>
		<a>blog</a>
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
		cursor: default;
		margin: auto;
		max-width: 900px;
	}

	.side {
		flex: 1;
	}

	#left {
		font-size: 30px;
	}

	#right {
		text-align: right;
	}

	#right a {
		color: inherit;
		text-decoration: none;
	}

	#right a:not(:last-child) {
		margin-right: 10px;
	} 
</style>
