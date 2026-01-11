import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bof-shortseries.bugaboo.tv",
      },
    ],
  },
};

export default nextConfig;
