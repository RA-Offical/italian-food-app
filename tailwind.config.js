/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		fontFamily: {
			secondary: "'Abril Fatface', cursive",
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				md: "2rem",
				lg: "3rem",
			},
		},
		extend: {
			colors: {
				dark: {
					100: "#6B6A6A",
					200: "#444444",
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
