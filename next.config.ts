import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let basePath = "";

if (isGithubActions) {
  // If we're on GitHub Actions, the repository name is in the format 'username/repo-name'
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
  basePath = `/${repo}`;
}

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
