<script lang="ts">
	import { isDarkMode } from './stores/themeStore';
	import FallbackIcon from './FallbackIcon.svelte';
	let isHovering = false;
</script>

<button
	class="w-9 p-1 aspect-square rounded-full"
	on:click={isDarkMode.toggle}
	on:mouseenter={() => (isHovering = true)}
	on:mouseleave={() => (isHovering = false)}
	aria-label="Toggle Dark Mode"
>
	<FallbackIcon
		icon="{$isDarkMode ? 'ph:sun' : 'ph:moon'}{isHovering ? '-fill' : ''}"
		class="w-full h-full"
	>
		<div
			slot="fallback"
			class="w-full h-full border-neutral-800 dark:border-neutral-200 hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-full border-2"
		/>
	</FallbackIcon>
</button>
