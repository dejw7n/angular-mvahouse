/** @type {import('tailwindcss').Config} */
const themeColors = {
	primary: "#9f7627",
	secondary: "#35459E",
	third: "#FF3541",
};

module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			colors: {
				primary: themeColors["primary"],
				secondary: themeColors["secondary"],
				third: themeColors["third"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
