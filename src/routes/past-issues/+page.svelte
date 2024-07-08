<script lang="ts">
	import { base } from '$app/paths';
	import ArticleView from '$lib/ArticleView.svelte';
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
<div class="w-full flex flex-col items-center">
	<nav class="fixed top-10 right-10">
		<a class="font-serif hover:font-bold text-lg" href="{base}/">home</a>
	</nav>
	{#each data.articles as article, i}
		<ArticleView
			{article}
			id={articleToId(article)}
			clickUp={clickUp(i)}
			clickDown={clickDown(i)}
		/>
	{/each}
</div>