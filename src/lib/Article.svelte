<script lang="ts">
    import type Article from '$lib/models/article.model';
    export let article: Article;
</script>

<a href={article.articleUrl} target="_blank" class="hover:font-bold">{article.title}</a>