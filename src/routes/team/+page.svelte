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
	class="flex min-h-[100vh] w-screen flex-col items-center justify-center text-center font-serif text-xl pt-16 p-4"
>
	<hgroup class="mb-4">
		<h2 class="underline">Editors in Chief</h2>
		<p>{data.team.editorsInChiefNames}</p>
	</hgroup>
	<div class="flex md:max-h-[70vh] md:w-fit w-auto flex-col flex-wrap items-center justify-center gap-x-20 gap-y-4">
		{#each data.team.units as teamUnit}
			<hgroup>
				<h2 class="underline">
					{teamUnit.positionName}{teamUnit.memberNames.length > 1 ? 's' : ''}
				</h2>
				{#each teamUnit.memberNames as name}
					<p>{name}</p>
				{/each}
			</hgroup>
		{/each}
	</div>
</main>
