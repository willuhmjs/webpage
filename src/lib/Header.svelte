<div class="wrapper">
	<div class="side" id="left"><a href="/">willuhmjs</a></div>
	<div class="side" id="right">
		<a href="/">about</a>
		<a href="/blog">blog</a>
	</div>
</div>

<style>
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

	a {
		padding-bottom: 2px;
		text-decoration: none;
		color: inherit;
	}

	a:hover {
		border-bottom: 2px solid lightgray;
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
