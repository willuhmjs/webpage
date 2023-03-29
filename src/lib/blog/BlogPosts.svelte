<script lang="ts">
	import { colorStore } from '../Color';
</script>

<section>
	<ul style="--color: {$colorStore}">
		<li>
			<h2><a href="/">cloudflare tunnels and raspberry pi</a></h2>
            <p class="subtitle"><time datetime="2023-01-04">Jan 4, 2023</time></p>
		</li>
		<li>
			<h2><a href="/">raspberry pi cooling techniques</a></h2>
            <p class="subtitle"><time datetime="2023-01-04">Jan 4, 2023</time></p>
		</li>
		<li>
			<h2><a href="/">there will be stuff here &lt;3</a></h2>
            <p class="subtitle"><time datetime="2023-01-04">Jan 4, 2023</time></p>  
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
		color: var(--color, transparent);
		margin-bottom: 17px;
	}

    .subtitle {
        margin-bottom: 10px;
        color: #737373;
    }
</style>
