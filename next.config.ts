import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["img.freepik.com", "veterinaire-tour-hassan.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });
return config;
  },

};

export default nextConfig;
