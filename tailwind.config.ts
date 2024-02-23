import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1120px',
			xl: '1580px',
		},
		colors: {
			black: '#000',
			gray: '#273444',
			'gray-mid-light': '#64748b',
			'gray-light': '#d3dce6',
			white: '#fff',
		},
		extend: {
			spacing: {
				'128': '32rem',
				'144': '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
};
export default config;
