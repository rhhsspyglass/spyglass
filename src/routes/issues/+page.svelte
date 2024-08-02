<script lang="ts">
	import ArticleList from '$lib/ArticleList.svelte';
	import SiteNavigation from '$lib/SiteNavigation.svelte';
	import type { Picture } from 'vite-imagetools';
	import type { PageServerData } from './$types';
	import { dev } from '$app/environment';
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

	const firstArticle = imageModules[`../../lib${data.articles[0].thumbnailUrl}`]?.default;

	const TITLE = "The Spyglass | issues";
	const DESCRIPTION = "Read our issues from this year.";
</script>

<svelte:head>
	<title>{TITLE}</title>
	<meta name="description" content={DESCRIPTION}>
	<meta property="og:title" content={TITLE}>
	<meta property="og:description" content={DESCRIPTION}>
	<meta property="og:type" content="website">
	<meta property="og:image" content={firstArticle.img.src}>
	<meta property="thumbnail" content={firstArticle.img.src}/>
	{#if !dev}
		<meta property="og:url" content="https://rhhspyglass.com">
	{/if}
</svelte:head>

<SiteNavigation showHome={true} />
<ArticleList articles={data.articles}/>