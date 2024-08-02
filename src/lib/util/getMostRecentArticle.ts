import type Article from "$lib/models/article.model";
import type { Picture } from "vite-imagetools";

function getMostRecentArticle(
	articles: Article[],
	imageModules: Record<string, { default: Picture }>,
	pathPrefix: string
) {
	if (articles.length === 0) {
		return null;
	} else {
		let i = 1;

		while (i <= articles.length) {
			if (articles[articles.length - i].thumbnailUrl) {
				return imageModules[
					`${pathPrefix}${articles[articles.length - i].thumbnailUrl}`
				]?.default;
			}

			i++;
		}

		return null;
	}
}

export default getMostRecentArticle;
