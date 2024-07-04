<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import type Article from './models/article.model';
	import LookingTube from './LookingTube.svelte';
	import { base } from '$app/paths';
	export let article: Article;
	export let id: string;
	export let onUp: VoidFunction = undefined;
	export let onDown: VoidFunction = undefined;

	const dispatch = createEventDispatcher();

	const articleTitleParts = article.title.split(' ');
	const articleTitleLine1 = articleTitleParts.slice(0, 2).join(' ');
	const articleTitleLine2 = articleTitleParts.slice(2).join(' ');

	let articleUrl = article.articleUrl;

	if (articleUrl.startsWith('/')) {
		articleUrl = base + articleUrl;
	}

	// Key dispatch
</script>

<a
	class="h-screen article-aspect dark:bg-neutral-800 bg-neutral-200 border-neutral-700 border-[1px] overflow-hidden font-serif article-layout article-text"
	{id}
	href={articleUrl}
	target="_blank"
>
	<!-- Spyglass Logo -->
	<div class="cursor-pointer logo flex flex-col items-center">
		<div>
			<h2 class="italic">the</h2>
			<h1 class="">spyglass</h1>
		</div>
		<LookingTube class="mt-4 mx-auto w-1/2" />
	</div>
	<!-- Article title -->
		<a href={articleUrl} target="_blank" class="title hover:font-bold text-center block">
			{articleTitleLine1}
			<br />
			{articleTitleLine2}
		</a>
	<!-- Article navigation -->
	<!-- <div class="">
        
        {#if onUp !== undefined}
        {/if}
        {#if onDown !== undefined}
        {/if}
    </div> -->
</a>

<style>
	.article-text {
		font-size: 1.75vh;
	}

	.article-aspect {
		aspect-ratio: 8.5 / 11;
	}

	.article-layout {
		display: grid;
		grid-template-rows: 1fr 2fr 1fr;
		grid-template-columns: 1fr 2fr 1fr;
	}

	.logo {
		@apply justify-self-center self-center;
		grid-column: 2;
		grid-row: 2;
	}

	.logo h1 {
		font-size: 4.25em;
		line-height: 1.1;
	}

	.logo h2 {
		font-size: 2.5em;
		line-height: 0.4;
	}

	.title {
		@apply justify-self-center self-center;
		grid-column: 2;
		grid-row: 3;
		font-size: 1.5em;
		line-height: 1.2;
	}
</style>
