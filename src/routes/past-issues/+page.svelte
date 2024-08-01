<script lang="ts">
	import ArticleList from '$lib/ArticleList.svelte';
	import SiteNavigation from '$lib/SiteNavigation.svelte';
	import type { PageServerData } from './$types';
	export let data: PageServerData;


</script>

<svelte:head>
	<title>The Spyglass | past issues</title>
</svelte:head>
<SiteNavigation showHome={true} />
<ArticleList articles={data.articles}/>