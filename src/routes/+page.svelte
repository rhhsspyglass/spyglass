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

<div class="flex justify-center items-center w-screen h-screen overflow-hidden select-none">
	<button
		class="absolute top-10 left-10 w-9 aspect-square rounded-full p-1"
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
		class="absolute right-0 bottom-0 py-10 pr-10 font-serif flex flex-col gap-4 items-end max-h-screen overflow-y-auto"
	>
		<!-- about, contact, past issues, current issues -->
		<Header href="/about" title="about" />
		<FoldingHeader title="contact">
			<div class="flex flex-col items-end gap-1">
				<a target="_blank" class="article-header" href="mailto:rhhsspyglass@gamil.com">email</a>
				<a target="_blank" class="article-header" href="https://www.instagram.com/rhhspyglass" referrerpolicy="no-referrer">instagram</a>
				<p>DM for inquires.</p>
			</div>
		</FoldingHeader>
		<FoldingHeader title="issues">
			<div class="flex flex-col items-end gap-1">
				{#each data.articles as article}
					{#if article.archived === false}
						<Article {article} />
					{/if}
				{/each}
				<a href="/issues" class="hover:font-bold article-header">view all</a>
			</div>
		</FoldingHeader>
		<FoldingHeader title="archive">
			<div class="flex flex-col items-end gap-1">
				{#each data.articles as article}
					{#if article.archived === true || article.archived === undefined}
						<Article {article} />
					{/if}
				{/each}
			</div>
		</FoldingHeader>
	</nav>
</div>
