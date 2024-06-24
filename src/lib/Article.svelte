<script lang="ts">
    import { base } from '$app/paths';
import type Article from '$lib/models/article.model';
    export let article: Article;
</script>

<a href="{base}/{article.articleUrl}" target="_blank" class="article-header">{article.shortTitle}</a>