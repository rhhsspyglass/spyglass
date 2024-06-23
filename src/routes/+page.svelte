<script lang="ts">
	import Article from '$lib/Article.svelte';
	import FoldingHeader from '$lib/FoldingHeader.svelte';
	import Header from '$lib/Header.svelte';
	import SpyglassLogo from '$lib/SpyglassLogo.svelte';
	import { isDarkMode } from '$lib/stores/themeStore';
	import type { PageServerData } from './$types';
	import Icon from '@iconify/svelte';

	export let data: PageServerData;
	let isHoveringDarkModeToggle = false;
</script>

<div class="grid grid-cols-3 w-screen h-screen overflow-clip select-none">
	<button
		class="relative top-10 left-10 w-9 aspect-square rounded-full p-1"
		on:click={isDarkMode.toggle}
		on:mouseenter={() => (isHoveringDarkModeToggle = true)}
		on:mouseleave={() => (isHoveringDarkModeToggle = false)}
		aria-label="Toggle Dark Mode"
	>
		{#if $isDarkMode}
			<Icon icon={isHoveringDarkModeToggle ? 'ph:sun-fill' : 'ph:sun'} class="w-full h-full" />
		{:else}
			<Icon icon={isHoveringDarkModeToggle ? 'ph:moon-fill' : 'ph:moon'} class="w-full h-full" />
		{/if}
	</button>

	<div class="cursor-pointer content-center place-center justify-self-center">
		<h2 class="font-serif italic text-2xl" style="line-height: 0.6">the</h2>
		<h1 class="font-serif text-5xl">spyglass</h1>
		<div class="hover:boop">
			<SpyglassLogo class="mt-3 mx-auto w-3/5" />
		</div>
	</div>
	<nav
		class="py-10 pr-10 place-content-end font-serif flex flex-col gap-4 items-end max-h-screen overflow-y-auto"
	>
		<!-- about, contact, past issues, current issues -->
		<Header href="/about" title="about" />
		<Header href="/contact" title="contact" />
		<FoldingHeader title="issues">
			<div class="flex flex-col items-end">
				{#each data.articles as article}
					{#if article.archived === false}
						<Article {article} />
						<Article {article} />
					{/if}
				{/each}
			</div>
		</FoldingHeader>
		<FoldingHeader title="archive">
			<div class="flex flex-col items-end">
				{#each data.articles as article}
					{#if article.archived === true || article.archived === undefined}
						<Article {article} />
					{/if}
				{/each}
			</div>
		</FoldingHeader>

	</nav>
</div>
