/** @type {import('tailwindcss').Config} */
const themeColors = {
	body: "#F4F4EC",
	primary: "#d2ae70",
	"primary-hover": "#dec799",
	secondary: "#A88A4A",
	"secondary-hover": "#C4A66F",
	tertiary: "#000",
	"tertiary-hover": "#374151",
};

module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			colors: {
				body: themeColors["body"],
				primary: themeColors["primary"],
				"primary-hover": themeColors["primary-hover"],
				secondary: themeColors["secondary"],
				"secondary-hover": themeColors["secondary-hover"],
				tertiary: themeColors["tertiary"],
				"tertiary-hover": themeColors["tertiary-hover"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
