<script lang="ts">
	import '../app.css';
	import { isDarkMode } from '$lib/stores/themeStore';
	import DarkModeToggle from '$lib/DarkModeToggle.svelte';
</script>

<svelte:head>
	<title>The Spyglass</title>
</svelte:head>

<div
	class="dark:dark-theme light-theme transition-colors duration-300 show"
	class:dark={$isDarkMode}
>
	<DarkModeToggle />

	<slot />
</div>

<style>
	/* VERY important to hide the ui while localstorage is loading */
	.show {
		animation: 200ms show;
	}
</style>
