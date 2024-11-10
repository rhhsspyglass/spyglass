<script lang="ts">
	import { base } from "$app/paths";
	import { theme } from "$lib/state/theme.svelte";
	import DarkModeToggle from "./DarkModeToggle.svelte";

	interface Props {
		showHome?: boolean;
		overlayLg?: boolean;
	}

	let { showHome = false, overlayLg = false }: Props = $props();
</script>

<nav
	class={`top pointer-events-none fixed z-50 flex w-full items-center justify-between px-6 py-4 xl:p-10 ${
		overlayLg ? "overlay" : ""
	} ${theme.value === "light" ? "light-mode" : "dark-mode"}`}
>
	<span class="pointer-events-auto relative">
		<DarkModeToggle />
	</span>
	{#if showHome}
		<a
			class="pointer-events-auto relative font-serif text-lg hover:font-bold"
			href="{base}/"
			>home
		</a>
	{/if}
</nav>

<style>
	nav.overlay {
		background-color: initial;
	}

	@media (max-width: 1024px) {
		nav.overlay.dark-mode {
			background-color: rgba(0, 0, 0, 0.25);
		}

		nav.overlay.light-mode {
			background-color: rgba(255, 255, 255, 0.75);
		}
	}
</style>
