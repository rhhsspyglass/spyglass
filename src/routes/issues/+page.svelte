<script lang="ts">
	import SpyglassLogo from '$lib/SpyglassLogo.svelte';
	import { base } from '$app/paths';
	import ArticleView from '$lib/ArticleView.svelte';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<h1>Issues</h1>
{#each data.articles as article}
	{#if article.archived !== true}
		<ArticleView {article} />
	{/if}
{/each}
