export default interface Article {
    /** The title of the article */
    title: string;
    /** The image alt text. */
    altText: string;
    /** The URL to read the article. */
    articleUrl: string;
    /** The image source URL. */
    imgUrl: string;
    date: string;
    visible?: boolean;
}