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

var offset = new Date().getTimezoneOffset();// getting offset to make time in gmt+0 zone (UTC) (for gmt+5 offset comes as -300 minutes)
let date = new Date();
date.setMinutes ( date.getMinutes() + offset);// date now in UTC time
            
var easternTimeOffset = -240; //for dayLight saving, Eastern time become 4 hours behind UTC thats why its offset is -4x60 = -240 minutes. So when Day light is not active the offset will be -300
date.setMinutes ( date.getMinutes() + easternTimeOffset);

</script>
{#if user}
    <div class="wrapper">
        <img src={user.avatar_url} alt="My profile icon" />
        <div>
            <h1>{user.name}</h1>
            <p>{user.bio}</p>
        <div class="links">
            <a href="https://www.bible.com/bible/111/rev.21.2">
                <i class="fa-solid fa-map-marker-alt"></i>
                <span>{user.location}</span>
            </a>
            <a href="mailto:me@willuhmjs.com?subject=Hello%20there!">
                <i class="fa-solid fa-envelope"></i>
                <span>me@willuhmjs.com</span>
            </a>
            <a href="https://time.is/New_York">
                <i class="fa-solid fa-clock"></i>
                <span>{date.getHours()}:{date.getMinutes()}</span>
            </a>
        </div>
        </div>
    </div>
{/if}

<style>
    .wrapper {
        display: flex;
        box-sizing: border-box;
        text-align: right;
        margin: 2rem auto;
        max-width: 600px;
    }

    .wrapper img {
        border-radius: 50%;
        max-width: 15rem;
        margin-right: auto;
    }

    .links {
        display: flex; flex-direction: column;
    }

    .links a {
        margin: 5px 0;
        color: inherit;
        text-decoration: none;
    }
</style>