import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // `next/image` optimization needs a server, which a static export doesn't have.
    unoptimized: true,
  },
};

export default nextConfig;
