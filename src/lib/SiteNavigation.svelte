<script lang="ts">
	import { base } from '$app/paths';
	import DarkModeToggle from './DarkModeToggle.svelte';

	export let showHome: boolean = false;
</script>

<nav class="pointer-events-none fixed z-50 flex w-full items-center justify-between p-10">
	<span class="ponter-events-auto relative">
		<DarkModeToggle />
	</span>
	{#if showHome}
		<a class="ponter-events-auto relative font-serif text-lg hover:font-bold" href="{base}/">home</a
		>
	{/if}
</nav>
