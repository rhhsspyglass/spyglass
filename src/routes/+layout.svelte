<script>
	import '../app.css';
	import { isDarkMode } from '$lib/stores/themeStore';
</script>

<div class={"dark:dark-theme light-theme transition-colors duration-300 show"} class:dark={$isDarkMode}>
    <slot />
</div>
