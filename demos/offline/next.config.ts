import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    // Configure externals - dependencies that should not be bundled
    config.externals = [
      ...(config.externals || ['rxjs']),
    ];

    // Enable top-level await
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true
    };

    return config;
  },
};

export default nextConfig;
