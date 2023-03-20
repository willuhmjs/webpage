<!-- large pfp icon on the left, info about me on the right. include header and description. maybe get it dynamically from api-->
<!-- use icons for stuff like location, mimic GitHub -->
<script lang="ts">
    import { onMount } from 'svelte';
    let user;
    async function updateUser() {
        const data = await fetch('https://api.github.com/users/willuhmjs?');
        user = await data.json();
    }
    onMount(updateUser);
</script>
{#if user}
    <div class="wrapper">
        <img src={user.avatar_url} alt="My profile icon" />
        <div>
            <h1>{user.name}</h1>
            <p>{user.bio}</p>
        </div>
    </div>
{/if}

<style>
    .wrapper {
        display: flex; 
        flex-direction: row;
        box-sizing: border-box;
    }

    .wrapper img {
        border-radius: 50%;
        max-width: 15rem;
        margin: 2rem;
    }

    .wrapper div {
        margin: 2rem .75rem;
    }
</style>