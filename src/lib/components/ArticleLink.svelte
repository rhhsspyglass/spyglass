<script lang="ts">
	import { base } from "$app/paths";
	import type Article from "$lib/models/article.model";

	interface Props {
		article: Article;
	}

	let { article }: Props = $props();

	let articleUrlPrefixed = $derived.by(() => {
		if (article.articleUrl.startsWith("/")) {
			return base + article.articleUrl;
		}

		return article.articleUrl;
	});
</script>

<a
	href={articleUrlPrefixed}
	target="_blank"
	rel="noopener noreferrer"
	class="article-header">{article.shortTitle}</a
>
