import fs from "fs";
import { resolve } from "path";

async function fetchTheme(name) {
	const res = await fetch(
	  `https://raw.githubusercontent.com/shikijs/shiki/main/packages/shiki/themes/${name}.json`
	);
	return await res.json();
}

async function main() {
    const dark = await fetchTheme("github-dark");
    const light = await fetchTheme("github-light");

    // write to src/themes/dark.json and light.json using fs.writeFileSync
    fs.writeFileSync("themes/light.json", JSON.stringify(light));
    fs.writeFileSync("themes/dark.json", JSON.stringify(dark));

    //fs.writeFileSync(resolve("themes/dark.json"), JSON.stringify(dark));
}

await main();