<script lang="ts">
	import type Article from './models/article.model';
	import LookingTube from './LookingTube.svelte';
	import { base } from '$app/paths';
	import FallbackIcon from './FallbackIcon.svelte';
	export let article: Article;
	export let id: string;
	export let clickUp: VoidFunction | undefined;
	export let clickDown: VoidFunction | undefined;

	const articleTitleParts = article.title.split(' '); // summer issue twenty twenty-three
	const articleTitleLine1 = articleTitleParts.slice(0, 2).join(' '); // summer issue
	const articleTitleLine2 = articleTitleParts.slice(2).join(' '); // twenty twenty-three

	let articleUrl = article.articleUrl;

	if (articleUrl.startsWith('/')) {
		articleUrl = base + articleUrl;
	}

	let upHovered = false;
	let downHovered = false;
</script>

<div
	class="h-screen min-h-fit max-w-screen article-aspect overflow-hidden grid article-layout bg-neutral-200 dark:bg-neutral-800 border-neutral-600 dark:border-neutral-700 border-[1px] font-serif article-text"
	{id}
>
	<!-- svelte-ignore a11y-missing-content -->
	<a href={articleUrl} target="_blank" class="absolute w-full h-full"></a>

	<!-- Spyglass Logo -->
	<header class="flex flex-col items-center justify-self-center self-center logo cursor-pointer">
		<div>
			<h2 class="italic">the</h2>
			<h1>spyglass</h1>
		</div>
		<LookingTube class="w-1/2 mt-4 mx-auto" />
	</header>
	<!-- Article title -->
	<a
		href={articleUrl}
		target="_blank"
		class="justify-self-center self-center title hover:font-bold text-center"
	>
		{articleTitleLine1}
		<br />
		{articleTitleLine2}
	</a>
	<!-- Article navigation -->
	<nav class="m-[35%] grid grid-rows-2 grid-cols-1 relative z-10 gap-2">
		{#if clickUp !== undefined}
			<button
				on:click={clickUp}
				class="w-full h-full up-button"
				on:mouseenter={() => (upHovered = true)}
				on:mouseleave={() => (upHovered = false)}
			>
				<FallbackIcon icon={upHovered ? 'ph:arrow-up-bold' : 'ph:arrow-up'} class="w-full h-full">
					<div slot="fallback" class="w-full h-full hover:font-bold text-xl">up</div>
				</FallbackIcon>
			</button>
		{/if}
		{#if clickDown !== undefined}
			<button
				on:click={clickDown}
				class="w-full h-full down-button"
				on:mouseenter={() => (downHovered = true)}
				on:mouseleave={() => (downHovered = false)}
			>
				<FallbackIcon
					icon={downHovered ? 'ph:arrow-down-bold' : 'ph:arrow-down'}
					class="w-full h-full"
				>
					<div slot="fallback" class="w-full h-full hover:font-bold text-xl">down</div>
				</FallbackIcon>
			</button>
		{/if}
	</nav>
</div>

<style>
	.article-text {
		font-size: 1.75vh;
	}

	.article-aspect {
		aspect-ratio: 8.5 / 11;
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

	nav {
		grid-column: 3;
		grid-row: 3;
	}

	.up-button {
		grid-column: 1;
		grid-row: 1;
	}

	.down-button {
		grid-column: 1;
		grid-row: 2;
	}
</style>
