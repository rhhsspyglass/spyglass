<script lang="ts">
	import SiteNavigation from '$lib/SiteNavigation.svelte';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<svelte:head>
	<title>The Spyglass | team</title>
</svelte:head>
<SiteNavigation showHome={true} />
<main
	class="min-h-[100vh] w-screen flex flex-col items-center justify-center font-serif text-center text-xl"
>
	<hgroup class="mb-4">
		<h2 class="underline">Editors in Chief</h2>
		<p>{data.team.editorsInChiefNames}</p>
	</hgroup>
	<div class="max-h-[70vh] flex flex-wrap flex-col justify-center items-center gap-x-20 gap-y-4">
		{#each data.team.units as teamUnit}
			<hgroup>
				<h2 class="underline">{teamUnit.positionName}{teamUnit.memberNames.length > 1 ? 's' : ''}</h2>
				{#each teamUnit.memberNames as name}
					<p>{name}</p>
				{/each}
			</hgroup>
		{/each}
	</div>
</main>