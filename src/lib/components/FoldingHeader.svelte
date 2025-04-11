<script lang="ts">
	import type { Snippet } from "svelte";
	import { prefersReducedMotion } from "svelte/motion";
	import { slide } from "svelte/transition";

	interface Props {
		title: string;
		children?: Snippet;
	}

	let { title, children }: Props = $props();

	let expanded = $state(false);
</script>

<div class="w-full">
	<button
		onclick={() => (expanded = !expanded)}
		class="header block w-full text-center md:text-end"
		class:font-bold={expanded}>{title}</button
	>
	{#if expanded}
		<div
			transition:slide={{ duration: prefersReducedMotion.current ? 0 : undefined }}
			class="mt-1"
		>
			{@render children?.()}
		</div>
	{/if}
</div>
