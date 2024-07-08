<script lang="ts">
	import Icon, { iconExists, loadIcon } from '@iconify/svelte';
    
	export let icon: string;
	export let loaded = false;
	
	let className: string = '';
	export { className as class };
    
    let update = 0;

	$: {
		update;

		loaded = iconExists(icon);
		if (!loaded) {
			loadIcon(icon)
				.then(() => update++)
				.catch(() => {});
		}
	}
</script>

{#if loaded}
	<Icon {icon} class={className} />
{:else}
	<slot name="fallback" />
{/if}
