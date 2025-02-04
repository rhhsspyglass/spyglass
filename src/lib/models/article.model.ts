export default interface Article {
	/** The title of the article, e.g. summer issue twenty twenty-four. */
	title: string;
	/** The image alt text or a shortened version of the title, e.g. summer issue 2024 */
	shortTitle: string;
	/** The URL to read the article. */
	articleUrl: string;
	/** The image source URL. */
	imgUrl?: string;
	/** The thumbnail source URL. */
	thumbnail?: Thumbnail;
	/** The date the article was published. Format: YYYY-MM-DD */
	date: string;
	archived: boolean;
}

export interface Thumbnail {
	/** The thumbnail source URL. */
	url: string;
	/** The "average" color of the thumbnail image. */
	color: string;
}
