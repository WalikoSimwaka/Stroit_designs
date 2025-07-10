/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-geist-sans)"],
				mono: ["var(--font-geist-mono)"],
			},
			colors: {
				primary: "#171717",
				secondary: "#0a0a0a",
				accent: "#ededed",
				vanilla: "#F1EADA",
				tobacco: "#B59E7D",
				mahogany: "#584738",
				mountain: "#AAA396",
				sand: "#CEC1A8",
				darkbg: "#1F1F1F",
				cardbg: "#2A2A2A",
			},
		},
	},
	plugins: [],
};
