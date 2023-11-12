/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				xs: "340px",
				"3xl": "2200px",
			},
			colors: {
				brown: {
					50: "#f7f1eb",
					100: "#efe3d7",
					200: "#dfc6af",
					300: "#ceaa86",
					400: "#be8d5e",
					500: "#ae7136",
					600: "#8b5a2b",
					700: "#684420",
					800: "#462d16",
					900: "#23170b",
				},
				green: {
					50: "#eef8ec",
					100: "#def1d9",
					200: "#bce2b3",
					300: "#9bd48c",
					400: "#79c566",
					500: "#58b740",
					600: "#469233",
					700: "#356e26",
					800: "#23491a",
					900: "#12250d",
				},
			},
		},
	},
	plugins: [],
};
