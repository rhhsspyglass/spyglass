<script lang="ts">
	import { base } from '$app/paths';
	import ArticleView from '$lib/ArticleView.svelte';
	import type { PageServerData } from './$types';
	export let data: PageServerData;

	const articleToId = (article) => {
		return article.shortTitle.replaceAll(' ', '-');
	};
</script>

<svelte:head>
	<title>The Spyglass | past issues</title>
</svelte:head>
<div class="w-full flex flex-col items-center">
	<nav class="fixed bottom-10 right-10">
		<a class="font-serif hover:font-bold text-lg" href="{base}/">home</a>
	</nav>
	{#each data.articles as article, i}
		<ArticleView
			{article}
			id={articleToId(article)}
			clickUp="#{i > 0 ? articleToId(data.articles[i - 1]) : ''}"
			clickDown="#{i < data.articles.length - 1 ? articleToId(data.articles[i + 1]) : ''}"
		/>
	{/each}
</div>

<style>
	* {
		@apply scroll-smooth;
	}
</style>