<script lang="ts">
	import ArticleList from "$lib/components/ArticleList.svelte";
	import SiteNavigation from "$lib/components/SiteNavigation.svelte";
	import type { Picture } from "vite-imagetools";
	import type { PageServerData } from "./$types";
	import { dev } from "$app/environment";
	import getMostRecentArticle from "$lib/util/getMostRecentArticle";
	import Meta from "$lib/components/Meta.svelte";

	interface Props {
		data: PageServerData;
	}

	let { data }: Props = $props();

	const imageModules: Record<string, { default: Picture }> = import.meta.glob(
		`./../../lib/thumbnails/*.{jpeg,jpg,png}`,
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	);

	const mostRecentArticle = getMostRecentArticle(
		data.articles.toReversed(),
		imageModules,
		"../../lib"
	);

	const TITLE = "The Spyglass | issues";
	const DESCRIPTION = "Read our issues from this year.";
</script>

<Meta
	title={TITLE}
	description={DESCRIPTION}
	url="https://rhhspyglass.com/issues"
	{mostRecentArticle}
/>

<SiteNavigation showHome={true} overlayLg={true} />
<ArticleList articles={data.articles} />
