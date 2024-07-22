<script lang="ts">
	import { base } from '$app/paths';
	import ArticleLink from '$lib/ArticleLink.svelte';
	import FoldingHeader from '$lib/FoldingHeader.svelte';
	import Header from '$lib/Header.svelte';
	import SpyglassLogo from '$lib/LookingTube.svelte';
	import SiteNavigation from '$lib/SiteNavigation.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>The Spyglass</title>
</svelte:head>
<SiteNavigation />
<main
	class="large:h-screen flex h-svh w-screen select-none items-center justify-center overflow-hidden font-serif"
>
	<header class="flex cursor-pointer flex-col items-center">
		<div>
			<h2 class="text-2xl italic" style="line-height: 0.6">the</h2>
			<h1 class="text-5xl">spyglass</h1>
		</div>
		<div class="hover:boop">
			<SpyglassLogo class="mx-auto mt-3 w-2/5" />
		</div>
	</header>
	<nav
		class="absolute bottom-0 right-0 flex max-h-screen flex-col items-end gap-4 overflow-y-auto p-10"
	>
		<Header href="{base}/about" title="about" />
		<FoldingHeader title="recent issues">
			<div class="flex flex-col items-end gap-1">
				{#each data.articles as article}
					{#if article.archived === false}
						<ArticleLink {article} />
					{/if}
				{/each}
				<a href="{base}/issues" class="article-header hover:font-bold">view all</a>
			</div>
		</FoldingHeader>
		<FoldingHeader title="past issues">
			<div class="flex flex-col items-end gap-1">
				{#each data.articles as article}
					{#if article.archived === true || article.archived === undefined}
						<ArticleLink {article} />
					{/if}
				{/each}
				<a href="{base}/past-issues" class="article-header hover:font-bold">view all</a>
			</div>
		</FoldingHeader>
		<Header href="{base}/team" title="team" />
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
</main>
