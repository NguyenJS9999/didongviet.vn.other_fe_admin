/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'picsum.photos'
			}
		]
	},
	env: {
		SERVER_API: process.env.SERVER_API,
		BASE_URL: process.env.BASE_URL,
		VERSTION: process.env.VERSTION
	}
};

module.exports = nextConfig;
