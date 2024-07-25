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
	class="max-w-screen article-aspect article-layout article-text grid h-screen min-h-fit overflow-hidden border-[1px] border-neutral-600 bg-neutral-200 font-serif dark:border-neutral-700 dark:bg-neutral-800"
	{id}
>
	<!-- svelte-ignore a11y-missing-content -->
	<a href={articleUrl} target="_blank" class="absolute h-full w-full"></a>

	<!-- Spyglass Logo -->
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
		class="title self-center justify-self-center text-center hover:font-bold"
	>
		{articleTitleLine1}
		<br />
		{articleTitleLine2}
	</a>
	<!-- Article navigation -->
	<nav class="relative m-[35%] grid grid-cols-1 grid-rows-2 gap-2">
		{#if clickUp !== undefined}
			<button
				on:click|stopPropagation={clickUp}
				class="up-button h-full w-full"
				on:mouseenter={() => (upHovered = true)}
				on:mouseleave={() => (upHovered = false)}
			>
				<FallbackIcon icon={upHovered ? 'ph:arrow-up-bold' : 'ph:arrow-up'} class="h-full w-full">
					<div slot="fallback" class="h-full w-full text-xl hover:font-bold">up</div>
				</FallbackIcon>
			</button>
		{/if}
		{#if clickDown !== undefined}
			<button
				on:click|stopPropagation={clickDown}
				class="down-button h-full w-full"
				on:mouseenter={() => (downHovered = true)}
				on:mouseleave={() => (downHovered = false)}
			>
				<FallbackIcon
					icon={downHovered ? 'ph:arrow-down-bold' : 'ph:arrow-down'}
					class="h-full w-full"
				>
					<div slot="fallback" class="h-full w-full text-xl hover:font-bold">down</div>
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
