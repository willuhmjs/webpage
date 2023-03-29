import randomColor from 'randomcolor';
import { onMount } from 'svelte';
import { readable } from 'svelte/store';

export const colorStore = readable("transparent", (set) => {
	onMount(() => {
		set(randomColor({
			luminosity: 'dark'
		}));
	})
});

