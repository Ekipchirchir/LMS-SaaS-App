import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'img.clerk.com' }
    ]
  },
  reactCompiler: true,
};

export default nextConfig;
