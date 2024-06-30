<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";
	import type Article from "./models/article.model";
	import SpyglassLogo from "./SpyglassLogo.svelte";
    export let article: Article;
    export let id: string;

    const dispatch = createEventDispatcher();
    const goUp = () => dispatch("getPrevArticle");
    const goDown = () => dispatch("getNextArticle");
</script>

<div class="h-screen article-aspect flex flex-col items-center justify-center bg-neutral-200 border-neutral-700 border-[1px] overflow-hidden font-serif" {id}>
    <!-- Spyglass Logo -->
    <div class="cursor-pointer">
		<h2 class="italic text-2xl" style="line-height: 0.6">the</h2>
		<h1 class="text-5xl">spyglass</h1>
		<div class="hover:boop">
			<SpyglassLogo class="mt-3 mx-auto w-3/5" />
		</div>
	</div>
</div>

<style>
    .article-aspect {
        aspect-ratio: 8.5 / 11;
    }
</style>
