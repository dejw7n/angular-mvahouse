/** @type {import('tailwindcss').Config} */
const themeColors = {
	primary: "#9f7627",
	primaryHover: "#644200",
	secondary: "#bc9b5b",
	secondaryHover: "#9f7627",
	third: "#35459E",
};

module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			colors: {
				primary: themeColors["primary"],
				primaryHover: themeColors["primaryHover"],
				secondary: themeColors["secondary"],
				secondaryHover: themeColors["secondaryHover"],
				third: themeColors["third"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
