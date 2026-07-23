import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/my-blog",
  assetPrefix: "/my-blog/",
};

export default nextConfig;
