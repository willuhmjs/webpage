<script>
    import { filepath } from "$lib/filepath";

    /** @type {string} */
    export let title;

    /** @type {string} */
    export let description;

    /** @type {string} */
    export let slug;
    
    $filepath = `/src/routes/article/${slug}/+page.md`;
</script>

<svelte:head>
    <title>{title} - willuhmjs.com</title>
    <meta name="description" content={description} />
</svelte:head>

<h1>{title}</h1>
<slot />