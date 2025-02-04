import PAST_TEAMS from "$lib/data/teams";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (req) => {
    const id = req.params.id;

	return {
		team: PAST_TEAMS[id],
        id,
	};
};
