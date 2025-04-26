import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    remotePatterns: [
      {
        hostname: "gateway.irys.xyz",
        protocol: "https",
      },
      {
        hostname: "arweave.net",
        protocol: "https",
      },
      {
        hostname: "kcaxhjlvvpenmyrfonpc.supabase.co",
        protocol: "https",
      },
    ],
  },
  webpack: (config) => {
    // for @metaplex-foundation/umi-uploader-irys
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      child_process: false,
      readline: false,
      "stream/promises": false,
    };
    config.externals.push(
      "pino-pretty",
      "lokijs",
      // "crypto",
      "http",
      "https",
      "crypto-browserify"
    );
    return config;
  },
};

export default nextConfig;
