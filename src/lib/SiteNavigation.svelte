<script lang="ts">
	import { base } from '$app/paths';
	import DarkModeToggle from './DarkModeToggle.svelte';

	export let showHome: boolean = false;
</script>

<nav class="fixed w-full top-0 left-0 flex items-center p-10 justify-between">
	<DarkModeToggle />
	{#if showHome}
		<a class="font-serif hover:font-bold text-lg" href="{base}/">home</a>
	{/if}
</nav>
