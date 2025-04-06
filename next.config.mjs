/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: false,
    images: {
       remotePatterns: [
        {protocol: "https", hostname: 'pbs.twimg.com'},
        {protocol: "https", hostname: 'picsum.photos'}
       ]
    }
};

export default nextConfig;
