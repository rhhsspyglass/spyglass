<script lang="ts">
	import { base } from '$app/paths';
	import type Article from '$lib/models/article.model';
	export let article: Article;

	let articleUrl = article.articleUrl;

	if (articleUrl.startsWith('/')) {
		articleUrl = base + articleUrl;
	}
</script>

<a href={articleUrl} target="_blank" rel="noopener noreferrer" class="article-header">{article.shortTitle}</a>