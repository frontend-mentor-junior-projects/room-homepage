/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-100': 'hsl(0, 0%, 63%)',
				'primary-200': 'hsl(0, 0%, 27%)',
				black: 'hsl(0, 0%, 0%)',
				white: 'hsl(0, 0%, 100%)',
			},
			fontSize: {
				body: '12px',
			},
			fontFamily: {
				sans: ['League Spartan', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
