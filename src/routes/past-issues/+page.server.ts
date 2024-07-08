import ARTICLES from "$lib/data/articles";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = ({ params }) => {
    return {
        articles: ARTICLES.filter((article) => article.archived)
    }
}