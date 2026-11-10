/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["swiper"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.codewars.com",
                pathname: "/users/**"
            }
        ]
    },
    dangerouslyAllowSVG: true,
    skipTrailingSlashRedirect: true,
    async rewrites() {
        return [
            {
                source: "/ingest/static/:path*",
                destination: "https://us-assets.i.posthog.com/static/:path*"
            },
            {
                source: "/ingest/array/:path*",
                destination: "https://us-assets.i.posthog.com/array/:path*"
            },
            {
                source: "/ingest/:path*",
                destination: "https://us.i.posthog.com/:path*"
            }
        ];
    }
};

module.exports = nextConfig;
