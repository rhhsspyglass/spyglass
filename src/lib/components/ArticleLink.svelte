<script lang="ts">
	import { base } from "$app/paths";
	import type Article from "$lib/models/article.model";

	interface Props {
		article: Article;
	}

	let { article }: Props = $props();

	let articleUrl = $state(article.articleUrl);

	let articleUrlPrefixed = $derived.by(() => {
		if (articleUrl.startsWith("/")) {
			return base + articleUrl;
		}

		return articleUrl;
	});
</script>

<a
	href={articleUrlPrefixed}
	target="_blank"
	rel="noopener noreferrer"
	class="article-header">{article.shortTitle}</a
>
