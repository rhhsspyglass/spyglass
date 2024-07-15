<script lang="ts">
	import ArticleView from '$lib/ArticleView.svelte';
	import type Article from '$lib/models/article.model';
	import SiteNavigation from '$lib/SiteNavigation.svelte';
	import type { PageServerData } from './$types';
	export let data: PageServerData;

	const articleToId = (article: Article) => {
		return article.shortTitle.replaceAll(' ', '-');
	};

	const clickUp = (curIndex: number) => {
		if (curIndex <= 0) return undefined;

		return () => {
			const prevArticle = document.getElementById(articleToId(data.articles[curIndex - 1]));
			prevArticle?.scrollIntoView({ behavior: 'smooth' });
		};
	};

	const clickDown = (curIndex: number) => {
		if (curIndex >= data.articles.length - 1) return undefined;

		return () => {
			const prevArticle = document.getElementById(articleToId(data.articles[curIndex + 1]));
			prevArticle?.scrollIntoView({ behavior: 'smooth' });
		};
	};
</script>

<svelte:head>
	<title>The Spyglass | past issues</title>
</svelte:head>
<SiteNavigation showHome={true} />
<main class="w-fit m-auto overflow-auto">
	{#each data.articles as article, i}
		<ArticleView
			{article}
			id={articleToId(article)}
			clickUp={clickUp(i)}
			clickDown={clickDown(i)}
		/>
	{/each}
</main>
