<script lang="ts">
	import { base } from "$app/paths";
	import ArticleLink from "$lib/components/ArticleLink.svelte";
	import FoldingHeader from "$lib/components/FoldingHeader.svelte";
	import Header from "$lib/components/Header.svelte";
	import SpyglassLogo from "$lib/components/SpyglassLogo.svelte";
	import SiteNavigation from "$lib/components/SiteNavigation.svelte";
	import { slide } from "svelte/transition";
	import type { PageServerData } from "./$types";
	import { dev } from "$app/environment";
	import type { Picture } from "vite-imagetools";
	import getMostRecentArticle from "$lib/util/getMostRecentArticle";
	import reducedMotion from "$lib/state/reducedMotion.svelte";

	interface Props {
		data: PageServerData;
	}

	let { data }: Props = $props();
	let navExpanded = $state(false);
	let viewportWidth = $state(0);

	const imageModules: Record<string, { default: Picture }> = import.meta.glob(
		"./../lib/thumbnails/*.{jpeg,jpg,png}",
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	);

	const mostRecentArticle = getMostRecentArticle(
		data.articles,
		imageModules,
		"../lib"
	);

	const TITLE = "The Spyglass";
	const DESCRIPTION =
		"The Spyglass is Richmond Hill High School's official school magazine.";
</script>

<svelte:window bind:innerWidth={viewportWidth} />
<svelte:head>
	<title>{TITLE}</title>
	<meta name="description" content={DESCRIPTION} />
	<meta property="og:title" content={TITLE} />
	<meta property="og:description" content={DESCRIPTION} />
	<meta property="og:type" content="website" />
	{#if mostRecentArticle}
		<meta property="og:image" content={mostRecentArticle.img.src} />
		<meta property="thumbnail" content={mostRecentArticle.img.src} />
	{/if}
	{#if !dev}
		<meta property="og:url" content="https://rhhspyglass.com" />
	{/if}
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
	{#if viewportWidth > 768}
		<nav class="absolute bottom-0 right-0 w-fit p-10">
			<div
				class="flex max-h-screen w-full flex-col items-end gap-2 overflow-y-auto"
			>
				<Header href="{base}/about" title="about" />
				<FoldingHeader title="recent issues">
					<div class="flex flex-col items-end gap-1">
						{#each data.articles as article}
							{#if article.archived === false}
								<ArticleLink {article} />
							{/if}
						{/each}
						<a href="{base}/issues" class="article-header hover:font-bold"
							>view all</a
						>
					</div>
				</FoldingHeader>
				<FoldingHeader title="past issues">
					<div class="flex flex-col items-end gap-1">
						{#each data.articles as article}
							{#if article.archived === true || article.archived === undefined}
								<ArticleLink {article} />
							{/if}
						{/each}
						<a href="{base}/past-issues" class="article-header hover:font-bold"
							>view all</a
						>
					</div>
				</FoldingHeader>
				<Header href="{base}/team" title="team" />
				<FoldingHeader title="contact">
					<div class="flex flex-col items-end gap-1">
						<a
							target="_blank"
							rel="noopener noreferrer"
							class="article-header"
							href="mailto:rhhsspyglass@gmail.com"
						>
							email
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							class="article-header"
							href="https://www.instagram.com/rhhspyglass"
							referrerpolicy="no-referrer"
						>
							instagram
						</a>
						<p>DM for inquiries</p>
					</div>
				</FoldingHeader>
			</div>
		</nav>
	{:else}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<nav
			class="absolute bottom-0 left-0 flex w-full flex-col items-center gap-2 bg-neutral-200 py-2 transition-colors duration-300 hover:cursor-pointer motion-reduce:transition-none dark:bg-neutral-800"
			onclick={() => (navExpanded = !navExpanded)}
		>
			<i class="ri-menu-line"></i>
			{#if navExpanded}
				<div
					transition:slide={{ duration: reducedMotion.value ? 0 : undefined }}
					class="flex flex-col items-center gap-1"
				>
					<Header href="{base}/about" title="about" />
					<Header href="{base}/issues" title="recent issues" />
					<Header href="{base}/past-issues" title="past issues" />
					<Header href="{base}/team" title="team" />
					<button onclick={(e) => e.stopPropagation()}>
						<FoldingHeader title="contact">
							<div class="flex flex-col items-center gap-1">
								<a
									target="_blank"
									rel="noopener noreferrer"
									class="article-header"
									href="mailto:rhhsspyglass@gmail.com">email</a
								>
								<a
									target="_blank"
									rel="noopener noreferrer"
									class="article-header"
									href="https://www.instagram.com/rhhspyglass"
									referrerpolicy="no-referrer">instagram</a
								>
								<p>DM for inquiries</p>
							</div>
						</FoldingHeader>
					</button>
				</div>
			{/if}
		</nav>
	{/if}
</main>

<style>
	nav i {
		font-size: 1.6rem;
	}
</style>
