<div class="wrapper">
	<div class="side" id="left"><a href="/">willuhmjs</a></div>
	<div class="side" id="right">
		<a href="/about">about</a>
		<a href="/">blog</a>
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

	a:hover, #right a:hover {
		border-bottom: 2px solid lightgray;
	}

	#right a {
		border-bottom: 2px dotted lightgray;
	}

	a {
		padding-bottom: 2px;
		text-decoration: none;
		color: inherit;
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
		margin-right: 13px;
	} 
</style>
