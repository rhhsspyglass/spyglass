<script lang="ts">
	import type Article from "./models/article.model";

    export let article: Article;
</script>

<div class="h-screen w-screen flex flex-col items-center justify-center bg-neutral-200 border-neutral-700 border-[1px]">
    <h1>{article.title}</h1>
</div>