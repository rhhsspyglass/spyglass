<script lang="ts">
	import { base } from '$app/paths';
	import DarkModeToggle from './DarkModeToggle.svelte';

	export let showHome: boolean = false;
</script>

<nav class="fixed flex w-full items-center justify-between p-10">
	<span class="relative z-50">
		<DarkModeToggle />
	</span>
	{#if showHome}
		<a class="relative font-serif text-lg hover:font-bold z-50" href="{base}/">home</a>
	{/if}
</nav>
