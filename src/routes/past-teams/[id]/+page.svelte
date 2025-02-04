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

	const TITLE = "The Spyglass | past teams";
	const DESCRIPTION = "Meet our past Spyglass teams";
</script>

<Meta
    title={TITLE}
    description={DESCRIPTION}
    url="https://rhhspyglass.com/past-teams/{data.id}"
/>


<SiteNavigation showHome={true} />

<TeamDisplay team={data.team}/>