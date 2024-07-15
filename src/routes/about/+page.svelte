<script lang="ts">
	import SpyglassLogo from '$lib/LookingTube.svelte';
	import SiteNavigation from '$lib/SiteNavigation.svelte';
</script>

<SiteNavigation showHome={true} />
<div class="h-screen w-screen flex flex-col items-center justify-center font-serif">
	<main class="w-2/5 max-w-[480px]">
		<h1 class="mb-3 text-3xl text-center">about</h1>
		<p class="mb-1 text-justify">
			The Spyglass is Richmond Hill High School's official school magazine.
		</p>
		<p class="mb-4 text-justify">
			We are proud to be completely student-owned, providing our readers with quality journalism,
			breathtaking photography and professional layouts. Every seasonal issue is an expression of
			student voice and tells the story of our vibrant school community.
		</p>

		<SpyglassLogo class="mx-auto h-4 hover:boop" />
	</main>
</div>
