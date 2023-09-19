/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		fontFamily: {
			secondary: "'Abril Fatface', cursive",
		},
		extend: {
			colors: {
				dark: {
					100: "#908F8F",
					200: "#6B6A6A",
					300: "#444444",
					DEFAULT: "#000",
				},
				red: {
					DEFAULT: "#F54748",
					100: "#FFF3F3",
				},
			},
		},
	},
	plugins: [],
};
