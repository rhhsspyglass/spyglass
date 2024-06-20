<script lang="ts">
	import Article from '$lib/Article.svelte';
	import Moon from '$lib/Moon.svelte';
	import SpyglassLogo from '$lib/SpyglassLogo.svelte';
	import Sun from '$lib/Sun.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	let isDarkMode = false;
</script>

<svelte:head>
	<title>The Spyglass</title>
</svelte:head>
<div
	class="flex justify-center items-center w-screen h-screen overflow-clip dark:dark-theme light-theme select-none transition-colors duration-500"
	class:dark={isDarkMode}
>
	<button
		class="absolute top-10 left-10 w-12 aspect-square rounded-full hover:dark-theme dark:hover:light-theme p-3 transition-colors"
		on:click={() => (isDarkMode = !isDarkMode)}
	>
		{#if isDarkMode}
			<Sun />
		{:else}
			<Moon />
		{/if}
	</button>

	<div class="cursor-pointer">
		<h2 class="font-serif italic text-2xl" style="line-height: 0.6">the</h2>
		<h1 class="font-serif text-5xl">spyglass</h1>
		<SpyglassLogo class="mt-2 mx-auto w-[60%]" />
	</div>
	<div
		class="bottom-0 right-0 absolute py-10 pr-10 font-serif flex flex-col gap-4 items-end max-h-screen overflow-y-auto"
	>
		{#each data.articles as article}
			<Article {article} />
			<Article {article} />
			<Article {article} />
		{/each}
	</div>
</div>