export type Theme = "light" | "dark";

function createThemeState() {
	let themeState = $state<Theme>("dark");

	return {
		get value() {
			return themeState;
		},
		set value(theme: Theme) {
			themeState = theme;
		},
		toggle() {
			if (themeState === "light") {
				themeState = "dark";
			} else {
				themeState = "light";
			}
		},
		mount() {
			themeState = (localStorage.getItem("theme") ?? "dark") as Theme;

			if ("matchMedia" in window) {
				if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
					themeState = "dark";
				}
			}
		},
		mountEffects() {
			localStorage.setItem("theme", themeState);

			document.documentElement.classList[
				themeState === "dark" ? "add" : "remove"
			]("dark");
		}
	};
}

export const theme = createThemeState();
