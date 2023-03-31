<section>
	<img alt="profile photograph" src="https://avatars.githubusercontent.com/u/58738637?v=4" />
	<div>
		<h1>William Faircloth</h1>
		<p>software engineer, student, disciple</p>
		<div class="links">
			<a href="https://github.com/willuhmjs" target="_blank" rel="noopener noreferrer"
				><i class="fa-brands fa-fw fa-github" />willuhmjs</a
			>
			<a
				href="https://discord.com/users/969629831300005918"
				target="_blank"
				rel="noopener noreferrer"
				><i class="fa-brands fa-fw fa-discord" id="discord" />willuhmjs#1995</a
			>
			<a href="mailto:me@willuhmjs.com"><i class="fa-solid fa-envelope" />me@willuhmjs.com</a>
		</div>
	</div>
</section>

<style>
	div * {
		margin: 0;
	}

	section {
		display: flex;
		margin-bottom: 2rem;
	}

	p {
		margin: 15px 0;
	}

	.links {
		display: flex;
		flex-direction: column;
		column-gap: 1.5ch;
	}

	.links a {
		margin: 0.5ch 0;
	}

	img {
		max-height: 200px;
		margin-right: 2ch;
	}

	i {
		margin-right: 1ch;
	}

	@media (max-width: 600px) {
		section {
			flex-direction: column;
		}

		img {
			margin-bottom: 2ch;
			max-height: 100%;
		}
	}
</style>
