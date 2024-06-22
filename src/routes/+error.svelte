<script lang="ts">
	import { page } from '$app/stores';
	import SpyglassLogo from '$lib/SpyglassLogo.svelte';
	import { isDarkMode } from '$lib/stores/themeStore';
</script>

<svelte:head>
	<title>The Spyglass | Error {$page.status}</title>
</svelte:head>

<div class="h-screen w-screen flex flex-col items-center justify-center">
	<div>
		<h1 class="font-serif text-3xl">
			Error {$page.status}: {$page.error.message}
		</h1>
		<div class="boop">
			<SpyglassLogo class="mt-4 mx-auto w-2/3" />
		</div>
	</div>
</div>
