<script lang="ts">
	import { base } from '$app/paths';
	import DarkModeToggle from './DarkModeToggle.svelte';

	export let showHome: boolean = false;
	export let overlayXl: boolean = false;
</script>

<nav class="top pointer-events-none fixed z-50 flex w-full items-center justify-between px-6 py-4 xl:p-10 {overlayXl ? 'overlay' : ""}">
	<span class="pointer-events-auto relative">
		<DarkModeToggle />
	</span>
	{#if showHome}
		<a class="pointer-events-auto relative font-serif text-lg hover:font-bold" href="{base}/">home</a
		>
	{/if}
</nav>

<style>
	nav.overlay {
		background-color: initial;
	}

	@media (max-width: 1280px) {
		nav.overlay {
			background-color: rgba(0, 0, 0, 0.25);
		}
	}
</style>