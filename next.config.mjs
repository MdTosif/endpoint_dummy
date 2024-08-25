/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["knex"],
    },
    swcMinify: true, // Use the SWC compiler for minification
};

export default nextConfig;
