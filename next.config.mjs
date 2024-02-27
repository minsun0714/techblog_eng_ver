import nextMDX from '@next/mdx';

const withMDX = nextMDX({
	extension: /\.mdx?$/,
});

const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
};

export default withMDX(nextConfig);
