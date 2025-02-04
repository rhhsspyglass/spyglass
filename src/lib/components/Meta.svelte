<script lang="ts">
	import { dev } from "$app/environment";
    import type { Picture } from "vite-imagetools";

    interface Props {
        title: string;
        description: string;
        url: string;
        mostRecentArticle?: Picture | null;
    }

    const {
        title,
        description,
        url,
        mostRecentArticle,
    }: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	{#if mostRecentArticle}
		<meta property="og:image" content={mostRecentArticle.img.src} />
		<meta property="thumbnail" content={mostRecentArticle.img.src} />
	{/if}
	{#if !dev}
		<meta property="og:url" content={url} />
	{/if}
</svelte:head>