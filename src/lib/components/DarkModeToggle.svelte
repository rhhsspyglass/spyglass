<script lang="ts">
	import { theme } from "$lib/state/theme.svelte";
	let isHovering = $state(false);
</script>

<button
	class="aspect-square w-9 rounded-full p-1"
	onclick={() => theme.toggle()}
	onmouseenter={() => (isHovering = true)}
	onmouseleave={() => (isHovering = false)}
	aria-label="Toggle Dark Mode"
>
	<i
		class="ri-{theme.value === 'light' ? 'moon' : 'sun'}-{isHovering
			? 'fill'
			: 'line'}"
	></i>
</button>

<style>
	button i {
		font-size: 1.5rem;
	}
</style>
