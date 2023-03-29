<script lang="ts">
    import { colorStore } from "../Color";
</script>
<section>
    <ul style="--color: {$colorStore}">
        <li>
            <h2><a href="/">cloudflare tunnels + raspberry pi</a></h2>
            <p>access your raspberry pi from anywhere in the world with cloudflare tunnels</p>
        </li>
        <li>
            <h2><a href="/">raspberry pi cooling techniques</a></h2>
			<p>how to make your raspberry pi as cool as a cucumber (or a raspberry)</p>
        </li>
        <li>
            <h2><a href="/">there will be stuff here &lt;3</a></h2>
            <p>there will totally be stuff here soon, I promise</p>
        </li>
    </ul>
</section>
<style>
    ul {
        list-style: none;
        margin-left: 0;
        padding: 0;
    }

    li {
        margin-top: 1.5em;
    }

    li h2 {
        color: var(--color);
    }

    li p {
        margin-top: 17px;
        color: #404040;
        font-style: italic;
    }
</style>