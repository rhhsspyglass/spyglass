import TEAM from "$lib/data/team";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
    return {
        team: TEAM
    }
}