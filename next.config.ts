import type { NextConfig } from "next";

const isGithubActions = !!process.env.GITHUB_ACTIONS;
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const basePath = isGithubActions ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
