<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";
	import type Article from "./models/article.model";
	import LookingTube from "./LookingTube.svelte";
    export let article: Article;
    export let id: string;
    export let onUp: VoidFunction = undefined;
    export let onDown: VoidFunction = undefined;

    const dispatch = createEventDispatcher();

    const articleTitle = article.title;

    // Key dispatch
</script>

<div class="h-screen article-aspect bg-neutral-200 border-neutral-700 border-[1px] overflow-hidden font-serif article-layout article-text" {id}>
    <!-- Spyglass Logo -->
    <div class="cursor-pointer logo">
		<h2 class="italic">the</h2>
		<h1 class="">spyglass</h1>
		<div class="hover:boop">
			<LookingTube class="mt-3 mx-auto w-1/2 " />
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
    .article-text {
        font-size: 2vh;
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
        @apply justify-self-center;
        grid-column: 2;
        grid-row: 3;
    }
</style>
