<!-- use icons for stuff like location, mimic GitHub -->
<script lang="ts">
	import { onMount } from 'svelte';
	let user;
	async function updateUser() {
		const data = await fetch('https://api.github.com/users/willuhmjs?');
		user = await data.json();
	}
	onMount(updateUser);

	var offset = new Date().getTimezoneOffset(); // getting offset to make time in gmt+0 zone (UTC) (for gmt+5 offset comes as -300 minutes)
	let date = new Date();
	date.setMinutes(date.getMinutes() + offset); // date now in UTC time

	var easternTimeOffset = -240; //for dayLight saving, Eastern time become 4 hours behind UTC thats why its offset is -4x60 = -240 minutes. So when Day light is not active the offset will be -300
	date.setMinutes(date.getMinutes() + easternTimeOffset);
</script>

<!-- large pfp icon on the left, info about me on the right. include header and description. maybe get it dynamically from api-->

{#if user}
	<div class="wrapper">
		<div>
			<h1>{user.name}</h1>
			<p>{user.bio}</p>
			<div class="links">
				<a href="https://www.bible.com/bible/111/rev.21.2">
					<i class="fa-solid fa-map-marker-alt" />
					{user.location}
				</a>
				<a href="mailto:me@willuhmjs.com?subject=Hello%20there!">
					<i class="fa-solid fa-envelope" />
					me@willuhmjs.com
				</a>
				<a href="https://time.is/New_York">
					<i class="fa-solid fa-clock" />
					{date.getHours().toString().padStart(2, '0')}:{date
						.getMinutes()
						.toString()
						.padStart(2, '0')}
				</a>
			</div>
		</div>
		<img src={user.avatar_url} alt="My profile icon" />
	</div>
{/if}

<style>
	.wrapper {
		display: flex;
		box-sizing: border-box;
		margin: 2rem auto;
		max-width: 600px;
	}

	.wrapper img {
		border-radius: 50%;
		max-width: 15rem;
	}

	.wrapper div {
		margin-right: auto;
	}

	.links {
		display: flex;
		flex-direction: column;
	}

	.links a {
		margin: 5px 0;
		text-decoration: none;
		color: inherit;
	}

	.links a i {
		margin-right: 6px;
	}

	
	a:hover {
		filter: contrast(0.5);
	}
</style>
