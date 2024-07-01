<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import SpyglassLogo from '$lib/LookingTube.svelte';
</script>

<div class="h-screen w-screen flex flex-col items-center justify-center">
	<div>
		{#if $page.status === 404}
			<h1 class="font-serif text-4xl text-center">page not found.</h1>
		{:else}
			<h1 class="font-serif text-4xl text-center">
				error {$page.status}
			</h1>
			<h2 class="font-serif text-lg text-center">{$page.error.message}</h2>
		{/if}
		<div class="hover:boop">
			<SpyglassLogo class="my-4 mx-auto w-1/2" />
		</div>
		<a href="{base}/" class="text-center block hover:font-bold hover:underline font-serif">go home.</a>
	</div>
</div>
