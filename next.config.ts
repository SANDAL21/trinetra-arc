import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",

  // Only use the repository path when building on GitHub Actions.
  // Local development remains at http://localhost:3000/
  basePath: isGitHubPages ? "/trinetra-arc" : "",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;