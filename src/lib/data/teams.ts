import type Team from "$lib/models/team.model";

const TEAM_2023_2024: Team = {
	editorsInChiefNames: "Elaine Wang and Elina Lai",
	units: [
		{
			positionName: "Copy Editor",
			memberNames: ["Yasmin Hadizad"]
		},
		{
			positionName: "Photography Editor",
			memberNames: ["Sam Abdi"]
		},
		{
			positionName: "Design Editor",
			memberNames: ["Lynn He"]
		},
		{
			positionName: "Associate Editor",
			memberNames: ["Rianna Zhu"]
		},
		{
			positionName: "Copywriter",
			memberNames: [
				"Amanda Xi",
				"Amrita Dudaka",
				"Anna Pan",
				"Eowyn Wong-Au",
				"Elaine Wang",
				"Jillian Ouyang",
				"Kate Shahidi",
				"Max Skidelsky",
				"Rianna Zhu",
				"Yasmin Hadizad"
			]
		},
		{
			positionName: "Photographer",
			memberNames: [
				"Anson Lai",
				"Audrey Lai",
				"Daniel Yang",
				"Emily Meng",
				"Emma Fodor",
				"Iris You",
				"Jack Kang",
				"Jolly Yan",
				"Marina Huang",
				"Sam Abdi"
			]
		},
		{
			positionName: "Designer",
			memberNames: [
				"Allyson Mack",
				"Andrew Chu",
				"Elina Lai",
				"Erin Chen",
				"Katrina Lam",
				"Lynn He",
				"Maggie Li",
				"Melinda Li",
				"Phoebe Su",
				"Vivian Wu"
			]
		},
		{
			positionName: "Webmaster",
			memberNames: ["Andrew Chu"]
		}
	]
};

const TEAM_2022_2023: Team = {
	editorsInChiefNames: "Rachel Liu and Samantha Lee",
	units: [
		{
			positionName: "Copy Editor",
			memberNames: ["Karen Zhou"]
		},
		{
			positionName: "Photography Editor",
			memberNames: ["Sam Abdi"]
		},
		{
			positionName: "Design Editor",
			memberNames: ["Ellie Liang", "Lynn He"]
		},
		{
			positionName: "Associate Editor",
			memberNames: ["Elaine Wang"]
		},
		{
			positionName: "Copywriter",
			memberNames: [
				"Andrew Yang",
				"Anna Pan",
				"Elaine Wang",
				"Jason Wu",
				"Karen Zhou",
				"Kate Shahidi",
				"Rianna Zhu",
				"Samantha Lee",
				"Sophie Druta",
				"Yasmin Hadizad"
			]
		},
		{
			positionName: "Photographer",
			memberNames: [
				"Viktor Ostapchuk",
				"Jolly Yan",
				"Rachel Liu",
				"Annie Chen",
				"Anson Lai",
				"Sam Abdi"
			]
		},
		{
			positionName: "Designer",
			memberNames: [
				"Fiona Xu",
				"Grace Fan",
				"Lynn He",
				"Hannah Truong",
				"Jillian Feng",
				"Melanie Ong",
				"Elina Lai",
				"Ellie Liang",
				"Samantha Lee",
				"Rachel Liu"
			]
		},
		{
			positionName: "Webmaster",
			memberNames: ["Melanie Lei"]
		}
	]
};

const PAST_TEAMS: Record<string, Team> = {
	"2023-2024": TEAM_2023_2024,
	"2022-2023": TEAM_2022_2023
};

export default PAST_TEAMS;
