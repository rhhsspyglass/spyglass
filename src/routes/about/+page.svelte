<script lang="ts">
	import { dev } from "$app/environment";
	import SpyglassLogo from "$lib/components/SpyglassLogo.svelte";
	import SiteNavigation from "$lib/components/SiteNavigation.svelte";
	import Meta from "$lib/components/Meta.svelte";

	const TITLE = "The Spyglass | about us";
	const DESCRIPTION = `The Spyglass is Richmond Hill High School's official school magazine.
		We are proud to be completely student-owned,
		providing our readers with quality journalism,
		breathtaking photography and professional layouts.
		Every seasonal issue is an expression of student voice and tells the story of our vibrant school community.`;
</script>

<Meta
	title={TITLE}
	description={DESCRIPTION}
	url="https://rhhspyglass.com/about"
/>

<SiteNavigation showHome={true} />

<div
	class="flex h-screen w-screen flex-col items-center justify-center font-serif"
>
	<main class="w-[60%] max-w-[480px]">
		<h1 class="mb-3 text-center text-3xl">about</h1>
		<p class="mb-1 text-justify">
			The Spyglass is Richmond Hill High School's official school magazine.
		</p>
		<p class="mb-4 text-justify">
			We are proud to be completely student-owned, providing our readers with
			quality journalism, breathtaking photography, and professional layouts.
			Every seasonal issue is an expression of student voice and tells the story
			of our vibrant school community.
		</p>

		<SpyglassLogo class="hover:boop mx-auto h-4" />
	</main>
</div>
