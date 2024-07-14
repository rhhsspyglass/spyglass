<script lang="ts">
	import SiteNavigation from '$lib/SiteNavigation.svelte';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<svelte:head>
	<title>The Spyglass | team</title>
</svelte:head>
<SiteNavigation showHome={true} />
<div class="min-h-[100vh] w-screen flex flex-col items-center justify-center">
	<main class="grid grid-cols-2 font-serif gap-x-20">
		<div class="top-row text-center mb-4">
			<hgroup class="text-xl">
				<h2 class="underline">Editors in Chief</h2>
				<p>{data.team.editorsInChiefNames[0]} and {data.team.editorsInChiefNames[1]}</p>
			</hgroup>
		</div>
		<div class="left-col flex flex-col gap-4 items-center justify-center text-center text-xl">
			<hgroup>
				<h2 class="underline">Copy Editor{data.team.copyEditorNames.length > 1 ? 's' : ''}</h2>
				{#each data.team.copyEditorNames as name}
					<p>{name}</p>
				{/each}
			</hgroup>
			<hgroup>
				<h2 class="underline">Photography Editor{data.team.photographyEditorNames.length > 1 ? 's' : ''}</h2>
				{#each data.team.photographyEditorNames as name}
					<p>{name}</p>
				{/each}
			</hgroup>
			<hgroup>
				<h2 class="underline">Design Editor{data.team.designEditorNames.length > 1 ? 's' : ''}</h2>
				{#each data.team.designEditorNames as name}
					<p>{name}</p>
				{/each}
			</hgroup>
			<hgroup>
				<h2 class="underline">Associate Editor{data.team.associateEditorNames.length > 1 ? 's' : ''}</h2>
				{#each data.team.associateEditorNames as name}
					<p>{name}</p>
				{/each}
			</hgroup>
			<hgroup>
				<h2 class="underline">Copywriter{data.team.copywriterNames.length > 1 ? 's' : ''}</h2>
				{#each data.team.copywriterNames as name}
					<p>{name}</p>
				{/each}
			</hgroup>
		</div>
		<div class="right-col flex flex-col gap-4 items-center justify-center text-center text-xl">
			<hgroup>
				<h2 class="underline">Photographer{data.team.photographerNames.length > 1 ? 's' : ''}</h2>
				{#each data.team.photographerNames as name}
					<p>{name}</p>
				{/each}
			</hgroup>
			<hgroup>
				<h2 class="underline">Designer{data.team.designerNames.length > 1 ? 's' : ''}</h2>
				{#each data.team.designerNames as name}
					<p>{name}</p>
				{/each}
			</hgroup>
		</div>
	</main>
</div>

<style>
	main {
		grid-auto-rows: auto;
	}
	.top-row {
		grid-column: 1 / span 2;
		grid-row: 1;
	}

	.left-col {
		grid-column: 1;
		grid-row: 2;
	}

	.right-col {
		grid-column: 2;
		grid-row: 2;
	}
</style>