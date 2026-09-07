import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/trinetra-arc",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
