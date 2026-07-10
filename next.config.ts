import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  basePath: "/shop-demo",
  assetPrefix: "/shop-demo",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
