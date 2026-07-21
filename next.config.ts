import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = '/kabirou_koulika'; // Corriger ici avec le vrai nom de ton dépôt !

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