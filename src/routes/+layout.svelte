<script lang="ts">
	import { onNavigate } from "$app/navigation";
	import { theme } from "$lib/state/theme.svelte";
	import type { Snippet } from "svelte";
	import "../app.css";
	import "remixicon/fonts/remixicon.css";

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();

	$effect(() => {
		theme.mount();
	});

	$effect(() => {
		theme.mountEffects();
	});

	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div
	class="light-theme show dark:dark-theme transition-colors duration-300 motion-reduce:transition-none"
>
	{@render children?.()}
</div>

<style>
	/* VERY important to hide the ui while localstorage is loading */
	.show {
		animation: 200ms show;
	}
</style>
