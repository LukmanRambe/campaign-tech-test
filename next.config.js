/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'static.tvmaze.com',
			},
		],
	},
};

module.exports = nextConfig;
