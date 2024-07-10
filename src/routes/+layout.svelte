<script lang="ts">
	import '../app.css';
	import { isDarkMode } from '$lib/stores/themeStore';
	import { onMount } from 'svelte';

	onMount(() => {
		isDarkMode.subscribe((value) => {
			document.documentElement.classList[value ? 'add' : 'remove']('dark');
		});
	});
</script>

<svelte:head>
	<title>The Spyglass</title>
	<meta property="og:title" content="The Spyglass | Richmond Hill HS" />
	<meta
		property="og:description"
		content="The Spyglass is Richmond Hill High School's official magazine."
	/>
	<meta property="og:image" content="https://rhhspyglass.com/images/2020-summer.jpg">
</svelte:head>
<div class="dark:dark-theme light-theme transition-colors duration-300 show">
	<slot />
</div>

<style>
	/* VERY important to hide the ui while localstorage is loading */
	.show {
		animation: 200ms show;
	}
</style>
