import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bof-shortseries.bugaboo.tv",
      },
      {
        protocol: "https",
        hostname: "static.bugaboo.tv",
      },
      {
        protocol: "https",
        hostname: "image-sapp-prod.bugaboo.tv",
      }
    ],
  },
};

export default nextConfig;
