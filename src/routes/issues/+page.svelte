<script lang="ts">
	import SpyglassLogo from '$lib/LookingTube.svelte';
	import { base } from '$app/paths';
	import ArticleView from '$lib/ArticleView.svelte';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<div class="w-full flex flex-col items-center overflow-x-clip">
	{#each data.articles as article}
		{#if article.archived !== true}
			<ArticleView {article} id={article.shortTitle.replaceAll(" ", "-")} />
		{/if}
	{/each}
</div>