<script lang="ts">
	import Icon, { iconExists, loadIcon, loadIcons, type IconifyIcon } from '@iconify/svelte';
	import { onMount } from 'svelte';

	export let icon: string;
	export let loaded = false;
	export let preload: string[] = [];

	let className: string = '';
	export { className as class };

	let loadIconTask: Promise<Required<IconifyIcon>>;

	onMount(() => {
		loaded = iconExists(icon);
		
		loadIcons(preload)

		if (!loaded) {
			loadIconTask = loadIcon(icon)
		}
	})
</script>

{#await loadIconTask}
	<slot name="fallback" />
{:then}
	<Icon on:mouseover {icon} class={className} />
{:catch}
	<slot name="fallback" />
{/await}
