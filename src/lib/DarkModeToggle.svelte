<script lang="ts">
	import { isDarkMode } from './stores/themeStore';
	import Icon, { iconExists, loadIcon } from '@iconify/svelte';
	let isHoveringDarkMode = false;

	let icon: string = 'ph:moon';
	isDarkMode.subscribe((value) => {
		icon = value ? 'ph:sun' : 'ph:moon';
	});

	let loaded = false;
	let update = 0;
	const icons = ['ph:sun', 'ph:moon', 'ph:sun-fill', 'ph:moon-fill'];

	$: {
		update;

		loaded = true;
		icons.forEach((value) => {
			const curLoaded = iconExists(value);

			if (!curLoaded) {
				loadIcon(value).then(() => {
					update++;
				}).catch(() => {
				});
			}
			loaded = loaded && curLoaded;
		});
	}
</script>

<button
	class="absolute top-10 left-10 w-9 aspect-square rounded-full p-1"
	on:click={isDarkMode.toggle}
	on:mouseenter={() => (isHoveringDarkMode = true)}
	on:mouseleave={() => (isHoveringDarkMode = false)}
	aria-label="Toggle Dark Mode"
>
	{#if loaded}
		<Icon icon="{icon}{isHoveringDarkMode ? '-fill' : ''}" class="w-full h-full" />
	{:else}
		<div
			class="w-full h-full border-2 border-neutral-800 dark:border-neutral-200 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200"
		/>
	{/if}
</button>
