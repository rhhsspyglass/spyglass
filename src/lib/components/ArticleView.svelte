<script lang="ts">
	import type Article from '../models/article.model';
	import LookingTube from './LookingTube.svelte';
	import { base } from '$app/paths';
	import type { Picture } from 'vite-imagetools';
	export let article: Article;
	export let id: string;

	const imageModules: Record<string, { default: Picture }> = import.meta.glob(
		'./../thumbnails/*.{jpeg,jpg,png}',
		{
			eager: true,
			query: {
				enhanced: true,
			}
		}
	);

	const articleTitleParts = article.title.split(' '); // summer issue twenty twenty-three
	const articleTitleLine1 = articleTitleParts.slice(0, 2).join(' '); // summer issue
	const articleTitleLine2 = articleTitleParts.slice(2).join(' '); // twenty twenty-three

	let articleUrl = article.articleUrl;

	if (articleUrl.startsWith('/')) {
		articleUrl = base + articleUrl;
	}
</script>

<div
	class="max-w-screen article-layout article-text grid min-h-fit border-[1px] border-neutral-600 bg-neutral-200 font-serif dark:border-neutral-700 dark:bg-neutral-800 h-dvh"
	{id}
>
	<!-- svelte-ignore a11y-missing-content -->
	
	<a href={articleUrl} target="_blank" rel="noopener noreferrer" class="relative block h-full w-auto link article-link">
		{#if imageModules[`..${article.thumbnailUrl}`]?.default}
			<enhanced:img src={imageModules[`..${article.thumbnailUrl}`].default} alt="Cover image for {article.title}"/>
		{/if}
	</a>
	
	{#if !imageModules[`..${article.thumbnailUrl}`]?.default}
		<header class="logo flex cursor-pointer flex-col items-center self-center justify-self-center">
			<div>
				<h2 class="italic">the</h2>
				<h1>spyglass</h1>
			</div>
			<LookingTube class="mx-auto mt-4 w-1/2" />
		</header>
		<!-- Article title -->
		<a
			href={articleUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="title self-center justify-self-center text-center hover:font-bold"
		>
			{articleTitleLine1}
			<br />
			{articleTitleLine2}
		</a>
	{/if}
</div>

<style>
	.link {
		grid-column-start: 1;
		grid-column-end: 4;
		grid-row-start: 1;
		grid-row-end: 4;
	}

	.article-text {
		font-size: 1.75vh;
	}

	.article-layout {
		grid-template-rows: 1fr 2fr 1fr;
		grid-template-columns: 1fr 2fr 1fr;
	}

	.logo {
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
		grid-column: 2;
		grid-row: 3;
		font-size: 1.5em;
		line-height: 1.3;
	}

	.article-link {
		display: block;
		height: 100%;
		object-fit: cover;
		object-position: center bottom;

		width: auto; 
	}
	
	picture, img {
		display: block;
		height: 100%;
		object-fit: cover;
		object-position: center bottom;

		width: auto; 
	}
</style>
