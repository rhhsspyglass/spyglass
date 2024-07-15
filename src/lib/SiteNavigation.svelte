<script lang="ts">
	import { base } from '$app/paths';
	import DarkModeToggle from './DarkModeToggle.svelte';

	export let showHome: boolean = false;
</script>

<nav class="w-full p-10 fixed z-10 flex items-center justify-between">
	<DarkModeToggle />
	{#if showHome}
		<a class="font-serif hover:font-bold text-lg" href="{base}/">home</a>
	{/if}
</nav>
