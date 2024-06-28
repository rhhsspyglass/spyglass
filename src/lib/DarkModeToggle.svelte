<script lang="ts">
	import { isDarkMode } from './stores/themeStore';
	import Icon from '@iconify/svelte';
	let isHoveringDarkModeToggle = false;
</script>

<button
	class="absolute top-10 left-10 w-9 aspect-square rounded-full p-1"
	on:click={isDarkMode.toggle}
	on:mouseenter={() => (isHoveringDarkModeToggle = true)}
	on:mouseleave={() => (isHoveringDarkModeToggle = false)}
	aria-label="Toggle Dark Mode"
>
	{#if $isDarkMode}
		<Icon icon={isHoveringDarkModeToggle ? 'ph:sun-fill' : 'ph:sun'} class="w-full h-full" />
	{:else}
		<Icon icon={isHoveringDarkModeToggle ? 'ph:moon-fill' : 'ph:moon'} class="w-full h-full" />
	{/if}
</button>
