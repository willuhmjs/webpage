import randomColor from 'randomcolor';
import { writable } from 'svelte/store';
const color = randomColor({
    luminosity: 'dark',
});

export const colorStore = writable(color);