<script lang="ts">
	import '../app.css';
	import { isDarkMode } from '$lib/stores/themeStore';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';

	onMount(() => {
		isDarkMode.subscribe((value) => {
			document.documentElement.classList[value ? 'add' : 'remove']('dark');
		});
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

<div class="light-theme show dark:dark-theme transition-colors duration-300">
	<slot />
</div>

<style>
	/* VERY important to hide the ui while localstorage is loading */
	.show {
		animation: 200ms show;
	}
</style>
