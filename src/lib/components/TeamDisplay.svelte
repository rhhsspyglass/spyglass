<script lang="ts">
	import type Team from "$lib/models/team.model";

	interface Props {
		team: Team;
	}

	const { team }: Props = $props();
</script>

<main
	class="flex min-h-[100vh] w-screen flex-col items-center justify-center p-4 pt-16 text-center font-serif text-xl"
>
	<hgroup class="mb-4">
		<h2 class="underline">Editors in Chief</h2>
		<p>{team.editorsInChiefNames}</p>
	</hgroup>
	<div
		class="flex w-auto flex-col flex-wrap items-center justify-center gap-x-20 gap-y-4 md:max-h-[120vh] lg:max-h-[72vh]"
	>
		{#each team.units as teamUnit}
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
