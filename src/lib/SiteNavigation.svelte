<script lang="ts">
	import { base } from '$app/paths';
	import DarkModeToggle from './DarkModeToggle.svelte';

	export let showHome: boolean = false;
</script>

<nav class="fixed z-10 flex w-full items-center justify-between p-10">
	<DarkModeToggle />
	{#if showHome}
		<a class="font-serif text-lg hover:font-bold" href="{base}/">home</a>
	{/if}
</nav>
