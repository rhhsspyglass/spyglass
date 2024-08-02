/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			serif: ["erato", "Times New Roman"]
		},
		extend: {
			height: {
				dvh: ["100vh", "100dvh"]
			}
		}
	},
	plugins: [],
	darkMode: "selector"
};
