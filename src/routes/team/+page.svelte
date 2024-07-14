<script lang="ts">
	import SiteNavigation from '$lib/SiteNavigation.svelte';
</script>

<svelte:head>
	<title>The Spyglass | team</title>
</svelte:head>
<SiteNavigation showHome={true} />
<div class="min-h-[100vh] w-screen flex flex-col items-center justify-center">
	<main class="grid grid-cols-2 font-serif gap-x-20">
		<div class="top-row text-center mb-4">
			<h1 class="text-3xl">team</h1>
			<hgroup class="text-xl">
				<h2 class="underline">Editors in Chief</h2>
				<p>Max Skidelsky and Rianna Zhu</p>
			</hgroup>
		</div>
		<div class="left-col flex flex-col gap-4 items-center justify-center text-center text-xl">
			<hgroup>
				<h2 class="underline">Copy Editor</h2>
				<p>Kate Shahidi</p>
			</hgroup>
			<hgroup>
				<h2 class="underline">Photography Editor</h2>
				<p>Jolly Yan</p>
			</hgroup>
			<hgroup>
				<h2 class="underline">Design Editor</h2>
				<p>Katrina Lam</p>
				<p>Lynn He</p>
			</hgroup>
			<hgroup>
				<h2 class="underline">Associate Editor</h2>
				<p>Erin Chen</p>
			</hgroup>
			<hgroup>
				<h2 class="underline">Copywriters</h2>
				<p>Amanda Xi</p>
				<p>Amrita Dudaka</p>
				<p>Anna Pan</p>
				<p>Eowyn Wong-Au</p>
				<p>Elaine Wang</p>
				<p>Jilian Ouyang</p>
				<p>Kate Shahidi</p>
				<p>Max Skidelsky</p>
				<p>Rianna Zhu</p>
				<p>Yasmin Hadizad</p>
			</hgroup>
		</div>
		<div class="right-col flex flex-col gap-4 items-center justify-center text-center text-xl">
			<hgroup>
				<h2 class="underline">Photographers</h2>
				<p>Audrey lai</p>
				<p>Daniel Yang</p>
				<p>Emma Fodor</p>
				<p>Emily Meng</p>
				<p>Iris You</p>
				<p>Jack Kang</p>
				<p>Jolly Yan</p>
				<p>Marina Huang</p>
				<p>Sam Abdi</p>
			</hgroup>
			<hgroup>
				<h2 class="underline">Designers</h2>
				<p>Allyson Mack</p>
				<p>Andrew Chu</p>
				<p>Elina Lai</p>
				<p>Erin Chen</p>
				<p>Katrina Lam</p>
				<p>Lynn He</p>
				<p>Maggie Li</p>
				<p>Melinda Li</p>
				<p>Phoebe Su</p>
				<p>Vivian Wu</p>
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