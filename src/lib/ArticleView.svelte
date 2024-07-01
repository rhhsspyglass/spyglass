<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";
	import type Article from "./models/article.model";
	import SpyglassLogo from "./SpyglassLogo.svelte";
    export let article: Article;
    export let id: string;
    export let onUp: VoidFunction = undefined;
    export let onDown: VoidFunction = undefined;

    const dispatch = createEventDispatcher();

    const articleTitle = article.title;

    // Key dispatch
</script>

<div class="h-screen article-aspect bg-neutral-200 border-neutral-700 border-[1px] overflow-hidden font-serif article-layout" {id}>
    <!-- Spyglass Logo -->
    <div class="cursor-pointer logo">
		<h2 class="italic text-2xl" style="line-height: 0.6">the</h2>
		<h1 class="text-5xl">spyglass</h1>
		<div class="hover:boop">
			<SpyglassLogo class="mt-3 mx-auto w-3/5" />
		</div>
	</div>
    <!-- Article title -->
    <div class="title">
        <h1>{articleTitle}</h1>
    </div>
    <!-- Article navigation -->
    <!-- <div class="">
        
        {#if onUp !== undefined}
        {/if}
        {#if onDown !== undefined}
        {/if}
    </div> -->
</div>

<style>
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

    .title {
        @apply justify-self-center;
        grid-column: 2;
        grid-row: 3;
    }
</style>
