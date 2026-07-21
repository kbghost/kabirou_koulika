import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = '/portfolio'; // Le nom de ton dépôt GitHub

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Requis pour l'export statique sur GitHub Pages
    remotePatterns: [
      { protocol: "https", hostname: "github.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
    ],
  },
  basePath: isProd ? repoName : '',
  assetPrefix: isProd ? `${repoName}/` : '',
};

export default nextConfig;