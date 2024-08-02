<script lang="ts">
	import { onMount } from 'svelte';
	import ArticleView from './ArticleView.svelte';
	import FallbackIcon from '$lib/components/FallbackIcon.svelte';
	import type Article from '../models/article.model';
	// import function to register Swiper custom elements
	import { register, type SwiperContainer } from 'swiper/element/bundle';

	// register Swiper custom elements
	register();

	let currentIndex = 0;

	onMount(() => {
		const swiperEl = <SwiperContainer> <unknown> document.querySelector('swiper-container');

		const params = {
			navigation: {
				nextEl: "#forward",
				prevEl: "#backward",
			}
		};

		// @ts-ignore
		Object.assign(swiperEl, params);

		// @ts-ignore
		swiperEl.initialize();

		const swiper = swiperEl.swiper;

		swiper.on('slideChange', (e) => {
			currentIndex = swiper.activeIndex;
		});
	})

	export let articles: Article[];
	
	let upHovered = false;
	let downHovered = false;

	const articleToId = (article: Article) => {
		return article.shortTitle.replaceAll(' ', '-');
	};
</script>

<main class="m-auto w-fit overflow-visible relative">
	<swiper-container class="h-screen swiper-container" init="false" direction="vertical" freeMode="true" mousewheel="true" nextEl="#forward" prevEl="#backward">
	{#each articles as article, i}
		<swiper-slide class="overflow-visible">
			<ArticleView
				{article}
				id={articleToId(article)}
			/>
		</swiper-slide>
	{/each}
	</swiper-container>
	<nav class="absolute flex-col w-20 right-0 bottom-0 m-6 z-10 hidden xl:flex">
		<button
			id="backward"
			class="{currentIndex === 0 ? 'invisible' : '' }"
			on:mouseenter={() => (upHovered = true)}
			on:mouseleave={() => (upHovered = false)}
		>
			<FallbackIcon
				icon={upHovered ? 'ph:arrow-up-bold' : 'ph:arrow-up'}
				preload={['ph:arrow-up-bold']}
				class="h-full w-full"
			>
				<div slot="fallback" class="h-full w-full text-xl hover:font-bold">up</div>
			</FallbackIcon>
		</button>
		<button
			id="forward"
			class="{currentIndex === articles.length - 1 ? 'invisible' : '' }"
			on:mouseenter={() => (downHovered = true)}
			on:mouseleave={() => (downHovered = false)}
		>
			<FallbackIcon
				icon={downHovered ? 'ph:arrow-down-bold' : 'ph:arrow-down'}
				preload={['ph:arrow-up-bold']}
				class="h-full w-full"
			>
				<div slot="fallback" class="h-full w-full text-xl hover:font-bold">down</div>
			</FallbackIcon>
		</button>
	</nav>
</main>

<style>
	@media (max-width: 1280px) {
		:global(nav.top) {
			background-color: rgba(0, 0, 0, 0.5);
		}
	}

	:global(.swiper-backface-hidden) {
		overflow: visible !important;
	}

	nav {
		transform: translateX(calc(100% + 3rem));
	}

	nav button:hover {
		cursor: pointer;
	}
</style>