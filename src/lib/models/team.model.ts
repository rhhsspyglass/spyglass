export interface TeamUnit {
	positionName: string;
	memberNames: string[];
}

export default interface Team {
	editorsInChiefNames: string;
	units: TeamUnit[];
}
