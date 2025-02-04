import type Team from '$lib/models/team.model';
import TEAM from './team';

const TEAM_2023_2024: Team = {
    editorsInChiefNames: "Elaine Wang and Elina Lai",
    units: [
        {
            positionName: "Copy Editor",
            memberNames: ["Kate Shahidi"],
        },
        {
            positionName: "Photography Editor",
            memberNames: ["Jolly Yan"],
        },
        {
            positionName: "Design Editor",
            memberNames: ["Katrina Lam", "Lynn He"],
        },
        {
            positionName: "Associate Editor",
            memberNames: ["Erin Chen"],
        },
        {
            positionName: "Copywriter",
            memberNames: [
                "Amanda Xi",
                "Amrita Dudaka",
                "Anna Pan",
                "Eowyn Wong-Au",
                "Elaine Wang",
                "Jilian Ouyang",
                "Kate Shahidi",
                "Max Skidelsky",
                "Rianna Zhu",
                "Yasmin Hadizad"
            ],
        },
        {
            positionName: "Photographer",
            memberNames: [
                "Audrey Lai",
                "Daniel Yang",
                "Emma Fodor",
                "Emily Meng",
                "Iris You",
                "Jack Kang",
                "Jolly Yan",
                "Marina Huang",
                "Sam Abdi"
            ],
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
            ],
        },
        {
            positionName: "Webmaster",
            memberNames: [
                "Andrew Chu",
            ],
        }
    ]
};

const PAST_TEAMS: Record<string, Team> = {
    "2023-2024": TEAM_2023_2024,
}

export default PAST_TEAMS;