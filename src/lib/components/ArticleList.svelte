<script lang="ts">
	import ArticleView from "./ArticleView.svelte";
	import type Article from "../models/article.model";
	// import function to register Swiper custom elements
	import { register, type SwiperContainer } from "swiper/element/bundle";
	import { prefersReducedMotion } from "svelte/motion";

	// register Swiper custom elements
	register();

	interface Props {
		articles: Article[];
	}

	let { articles }: Props = $props();

	$effect(() => {
		const swiperEl = document.querySelector(
			"swiper-container"
		) as unknown as SwiperContainer;

		const params = {
			navigation: {
				nextEl: "#forward",
				prevEl: "#backward"
			},
			mousewheel: {
				enabled: true
			}
		};

		Object.assign(swiperEl, params);

		swiperEl.initialize();

		const swiper = swiperEl.swiper;

		swiper.on("slideChange", (e) => {
			currentIndex = swiper.activeIndex;
		});
	});

	let currentIndex = $state(0);
	let upHovered = $state(false);
	let downHovered = $state(false);

	const articleToId = (article: Article) => {
		return article.shortTitle.replaceAll(" ", "-");
	};
</script>

<main class="relative m-auto w-fit overflow-visible">
	<swiper-container
		class="swiper-container article-aspect h-dvh"
		init="false"
		direction="vertical"
		freeMode="true"
		nextEl="#forward"
		prevEl="#backward"
		speed={prefersReducedMotion.current ? 0 : 300}
	>
		{#each articles as article}
			<swiper-slide class="h-dvh overflow-visible">
				<ArticleView {article} id={articleToId(article)} />
			</swiper-slide>
		{/each}
	</swiper-container>
	<nav class="absolute bottom-0 right-0 z-10 m-2 hidden w-10 flex-col lg:flex">
		<button
			id="backward"
			class={currentIndex === 0 ? "invisible" : ""}
			onmouseenter={() => (upHovered = true)}
			onmouseleave={() => (upHovered = false)}
			aria-label="move to the above article"
		>
			<i
				class="text-[3.5rem] hover:cursor-pointer ri-arrow-up-circle-{upHovered
					? 'fill'
					: 'line'}"
			>
			</i>
		</button>
		<button
			id="forward"
			class={currentIndex === articles.length - 1 ? "invisible" : ""}
			onmouseenter={() => (downHovered = true)}
			onmouseleave={() => (downHovered = false)}
			aria-label="move to the below article"
		>
			<i
				class="text-[3.5rem] hover:cursor-pointer ri-arrow-down-circle-{downHovered
					? 'fill'
					: 'line'}"
			>
			</i>
		</button>
	</nav>
</main>

<style>
	:global(.swiper-backface-hidden) {
		overflow: visible !important;
	}

	nav {
		transform: translateX(calc(100% + 2rem));
	}

	nav button:hover {
		cursor: pointer;
	}

	.article-aspect {
		aspect-ratio: 8.5 / 11;
	}

	@media (max-width: 768px) {
		.article-aspect {
			aspect-ratio: auto;
		}
	}

	@media (max-width: 1024px) and (min-height: 1024px) {
		nav {
			display: none;
		}
	}
</style>
