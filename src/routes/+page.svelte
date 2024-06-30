<script lang="ts">
	import { base } from '$app/paths';
	import ArticleLink from '$lib/ArticleLink.svelte';
	import DarkModeToggle from '$lib/DarkModeToggle.svelte';
	import FoldingHeader from '$lib/FoldingHeader.svelte';
	import Header from '$lib/Header.svelte';
	import SpyglassLogo from '$lib/SpyglassLogo.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="flex justify-center items-center w-screen h-screen overflow-hidden select-none font-serif">
	<DarkModeToggle />

	<div class="cursor-pointer">
		<h2 class="italic text-2xl" style="line-height: 0.6">the</h2>
		<h1 class="text-5xl">spyglass</h1>
		<div class="hover:boop">
			<SpyglassLogo class="mt-3 mx-auto w-3/5" />
		</div>
	</div>
	<nav
		class="absolute right-0 bottom-0 p-10 flex flex-col gap-4 items-end max-h-screen overflow-y-auto"
	>
		<Header href="{base}/about" title="about" />
		<FoldingHeader title="recent issues">
			<div class="flex flex-col items-end gap-1">
				{#each data.articles as article}
					{#if article.archived === false}
						<ArticleLink {article} />
					{/if}
				{/each}
				<a href="{base}/issues" class="hover:font-bold article-header">view all</a>
			</div>
		</FoldingHeader>
		<FoldingHeader title="past issues">
			<div class="flex flex-col items-end gap-1">
				{#each data.articles as article}
					{#if article.archived === true || article.archived === undefined}
						<ArticleLink {article} />
					{/if}
				{/each}
				<a href="{base}/past-issues" class="hover:font-bold article-header">view all</a>

			</div>
		</FoldingHeader>
		<Header href="{base}/team" title="team"/>
		<FoldingHeader title="contact">
			<div class="flex flex-col items-end gap-1">
				<a target="_blank" class="article-header" href="mailto:rhhsspyglass@gmail.com">email</a>
				<a
					target="_blank"
					class="article-header"
					href="https://www.instagram.com/rhhspyglass"
					referrerpolicy="no-referrer">instagram</a
				>
				<p>DM for inquires.</p>
			</div>
		</FoldingHeader>
	</nav>
</div>
