<script lang="ts">
	import { dev } from '$app/environment';
	import ArticleList from '$lib/components/ArticleList.svelte';
	import SiteNavigation from '$lib/components/SiteNavigation.svelte';
	import type { Picture } from 'vite-imagetools';
	import type { PageServerData } from './$types';
	import type Article from '$lib/models/article.model';
	import getMostRecentArticle from '$lib/util/getMostRecentArticle';
	export let data: PageServerData;

	const imageModules: Record<string, { default: Picture }> = import.meta.glob(
		`./../../lib/thumbnails/*.{jpeg,jpg,png}`,
		{
			eager: true,
			query: {
				enhanced: true,
			}
		}
	);
	
	const mostRecentArticle = getMostRecentArticle(data.articles, imageModules, "../../lib");

	const TITLE = "The Spyglass | past issues";
	const DESCRIPTION = "Read our past issues.";
</script>

<svelte:head>
	<title>{TITLE}</title>
	<meta name="description" content={DESCRIPTION}>
	<meta property="og:title" content={TITLE}>
	<meta property="og:description" content={DESCRIPTION}>
	<meta property="og:type" content="website">
	{#if mostRecentArticle}
		<meta property="og:image" content={mostRecentArticle.img.src}>
		<meta property="thumbnail" content={mostRecentArticle.img.src}/>
	{/if}
	{#if !dev}
		<meta property="og:url" content="https://rhhspyglass.com">
	{/if}
</svelte:head>

<SiteNavigation showHome={true} />
<ArticleList articles={data.articles}/>