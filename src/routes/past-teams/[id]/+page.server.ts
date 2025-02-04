import PAST_TEAMS from "$lib/data/teams";
import type { PageServerLoad } from "./$types";
import type { EntryGenerator } from "./$types";

export const load: PageServerLoad = (req) => {
	const id = req.params.id;

	return {
		team: PAST_TEAMS[id],
		id
	};
};

export const entries: EntryGenerator = () => {
	return Object.keys(PAST_TEAMS).map((teamId) => ({ id: teamId }));
};
