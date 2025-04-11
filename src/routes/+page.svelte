<script lang="ts">
	import { base } from "$app/paths";
	import ArticleLink from "$lib/components/ArticleLink.svelte";
	import FoldingHeader from "$lib/components/FoldingHeader.svelte";
	import Header from "$lib/components/Header.svelte";
	import SiteNavigation from "$lib/components/SiteNavigation.svelte";
	import SpyglassLogo from "$lib/components/SpyglassLogo.svelte";
	import getMostRecentArticle from "$lib/util/getMostRecentArticle";
	import { slide } from "svelte/transition";
	import type { Picture } from "vite-imagetools";
	import type { PageServerData } from "./$types";
	import PAST_TEAMS from "$lib/data/teams";
	import Meta from "$lib/components/Meta.svelte";
	import { prefersReducedMotion } from "svelte/motion";

	interface Props {
		data: PageServerData;
	}

	/** Maximum number of articles to show in the past issues navigation preview */
	const MAX_PAST_ARTICLES = 12;

	let { data }: Props = $props();
	let navExpanded = $state(false);
	let viewportWidth = $state(0);

	let recentArticles = $derived(
		data.articles.filter((article) => article.archived === false)
	);
	let pastArticles = $derived(
		data.articles.filter(
			(article) => article.archived === true || article.archived === undefined
		)
	);

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
<Meta
	title={TITLE}
	description={DESCRIPTION}
	url="https://rhhspyglass.com"
	{mostRecentArticle}
/>

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
						{#each recentArticles as article}
							<ArticleLink {article} />
						{/each}
						<a href="{base}/issues" class="article-header hover:font-bold"
							>view all</a
						>
					</div>
				</FoldingHeader>
				<FoldingHeader title="past issues">
					<div class="flex flex-col items-end gap-1">
						{#each pastArticles.slice(0, MAX_PAST_ARTICLES) as article}
							<ArticleLink {article} />
						{/each}
						<a href="{base}/past-issues" class="article-header hover:font-bold"
							>view all</a
						>
					</div>
				</FoldingHeader>
				<Header href="{base}/team" title="team" />
				<FoldingHeader title="past teams">
					<div class="flex flex-col items-end gap-1">
						{#each Object.keys(PAST_TEAMS) as team}
							<a
								href="{base}/past-teams/{team}"
								class="article-header hover:font-bold">{team}</a
							>
						{/each}
					</div>
				</FoldingHeader>
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
			<i class="ri-menu-line text-[1.6rem]"></i>
			{#if navExpanded}
				<div
					transition:slide={{ duration: prefersReducedMotion.current ? 0 : undefined }}
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
