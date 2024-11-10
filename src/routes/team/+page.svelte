<script lang="ts">
	import { dev } from "$app/environment";
	import SiteNavigation from "$lib/components/SiteNavigation.svelte";
	import type { PageServerData } from "./$types";

	interface Props {
		data: PageServerData;
	}

	let { data }: Props = $props();

	const TITLE = "The Spyglass | team";
	const DESCRIPTION = "Meet our amazing team for 2024-2025!";
</script>

<svelte:head>
	<title>{TITLE}</title>
	<meta name="description" content={DESCRIPTION} />
	<meta property="og:title" content={TITLE} />
	<meta property="og:description" content={DESCRIPTION} />
	<meta property="og:type" content="website" />
	{#if !dev}
		<meta property="og:url" content="https://rhhspyglass.com" />
	{/if}
</svelte:head>
<SiteNavigation showHome={true} />
<main
	class="flex min-h-[100vh] w-screen flex-col items-center justify-center p-4 pt-16 text-center font-serif text-xl"
>
	<hgroup class="mb-4">
		<h2 class="underline">Editors in Chief</h2>
		<p>{data.team.editorsInChiefNames}</p>
	</hgroup>
	<div
		class="flex w-auto flex-col flex-wrap items-center justify-center gap-x-20 gap-y-4 md:w-fit lg:max-h-[72vh]"
	>
		{#each data.team.units as teamUnit}
			<hgroup>
				<h2 class="underline">
					{teamUnit.positionName}{teamUnit.memberNames.length > 1 ? "s" : ""}
				</h2>
				{#each teamUnit.memberNames as name}
					<p>{name}</p>
				{/each}
			</hgroup>
		{/each}
	</div>
</main>
