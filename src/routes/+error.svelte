<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import SpyglassLogo from '$lib/components/SpyglassLogo.svelte';
</script>

<svelte:head>
	<title>The Spyglass | {$page.status === 404 ? 'page not found' : 'error'}</title>
</svelte:head>
<main class="flex h-screen w-screen flex-col items-center justify-center">
	{#if $page.status === 404}
		<h1 class="text-center font-serif text-4xl">page not found</h1>
	{:else}
		<h1 class="text-center font-serif text-4xl">
			error {$page.status}
		</h1>
		<h2 class="text-center font-serif text-lg">{$page?.error?.message}</h2>
	{/if}
	<div class="hover:boop">
		<SpyglassLogo class="mx-auto my-4 h-8" />
	</div>
	<a href="{base}/" class="block text-center font-serif hover:font-bold hover:underline">go home</a
	>
</main>
