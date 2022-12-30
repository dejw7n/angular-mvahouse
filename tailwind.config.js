/** @type {import('tailwindcss').Config} */
const themeColors = {
	pampas: "#F4F4EC",
	primary: "#d2ae70",
	"primary-hover": "#A88A4A",
	secondary: "#A88A4A",
	"secondary-hover": "#C4A66F",
	third: "#3B351C",
};

module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			colors: {
				pampas: themeColors["pampas"],
				primary: themeColors["primary"],
				"primary-hover": themeColors["primary-hover"],
				secondary: themeColors["secondary"],
				"secondary-hover": themeColors["secondary-hover"],
				third: themeColors["third"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
