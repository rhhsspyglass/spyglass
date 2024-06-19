<script lang="ts">
	import Article from '$lib/Article.svelte';
	import SpyglassLogo from '$lib/SpyglassLogo.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>The Spyglass</title>
</svelte:head>
<div class="flex justify-center items-center w-screen h-screen overflow-clip text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900 cursor-pointer select-none">
	<div>
		<h2 class="font-serif italic text-2xl" style="line-height: 0.6">the</h2>
		<h1 class="font-serif text-5xl">spyglass</h1>
		<SpyglassLogo class="fill-neutral-800 dark:fill-neutral-200 mt-2 mx-auto w-[60%]" />
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

<style>
</style>
