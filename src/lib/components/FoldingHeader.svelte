<script lang="ts">
	import { slide } from "svelte/transition";

	export let title: string;

	let expanded = false;
</script>

<div class="w-full">
	<button
		on:click={() => (expanded = !expanded)}
		class="header block w-full text-center md:text-end"
		class:font-bold={expanded}>{title}</button
	>
	{#if expanded}
		<div transition:slide class="mt-1">
			<slot />
		</div>
	{/if}
</div>
