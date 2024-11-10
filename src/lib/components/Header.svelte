<script lang="ts">
	interface Props {
		href?: string;
		title: string;
	}

	let { href = "", title }: Props = $props();
</script>

<a {href} class="header">{title}</a>
