<script lang="ts">
	import { dev } from "$app/environment";
	import Meta from "$lib/components/Meta.svelte";
	import SiteNavigation from "$lib/components/SiteNavigation.svelte";
	import TeamDisplay from "$lib/components/TeamDisplay.svelte";
	import type { PageServerData } from "./$types";

	interface Props {
		data: PageServerData;
	}

	let { data }: Props = $props();

	const TITLE = "The Spyglass | team";
	const DESCRIPTION = "Meet our amazing team for 2024-2025!";
</script>

<Meta
	title={TITLE}
	description={DESCRIPTION}
	url="https://rhhspyglass.com/team"
/>

<SiteNavigation showHome={true} />

<TeamDisplay team={data.team} />
