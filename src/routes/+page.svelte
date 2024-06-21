<script lang="ts">
	import Article from '$lib/Article.svelte';
	import SpyglassLogo from '$lib/SpyglassLogo.svelte';
	import type { PageServerData } from './$types';
	import Icon from '@iconify/svelte';

	export let data: PageServerData;
	let isDarkMode = false;
	let isHoveringDarkModeToggle = false;
</script>

<svelte:head>
	<title>The Spyglass</title>
</svelte:head>
<div
	class="flex justify-center items-center w-screen h-screen overflow-clip dark:dark-theme light-theme select-none transition-colors duration-500"
	class:dark={isDarkMode}
>
	<button
		class="absolute top-10 left-10 w-9 aspect-square rounded-full p-1"
		on:click={() => (isDarkMode = !isDarkMode)}
		on:mouseenter={() => (isHoveringDarkModeToggle = true)}
		on:mouseleave={() => (isHoveringDarkModeToggle = false)}
	>
		{#if isDarkMode}
			<Icon icon={isHoveringDarkModeToggle ? 'ph:sun-fill' : 'ph:sun'} class="w-full h-full" />
		{:else}
			<Icon icon={isHoveringDarkModeToggle ? 'ph:moon-fill' : 'ph:moon'} class="w-full h-full" />
		{/if}
	</button>

	<div class="cursor-pointer">
		<h2 class="font-serif italic text-2xl" style="line-height: 0.6">the</h2>
		<h1 class="font-serif text-5xl">spyglass</h1>
		<div class="boop">
			<SpyglassLogo class="mt-2 mx-auto w-[60%]" />
		</div>
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
	@keyframes boop {
		0% {
			transform: rotate(0deg);
		}
		15% {
			transform: rotate(-4deg);
		}
		30% {
			transform: rotate(4deg);
		}
		45% {
			transform: rotate(-4deg);
		}
		60% {
			transform: rotate(3deg);
		}
		75% {
			transform: rotate(-3deg);
		}
		90% {
			transform: rotate(1deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	.boop:hover {
		animation: 1s boop forwards running;
	}
</style>
