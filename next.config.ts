import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.NODE_ENV === "development" ? { distDir: ".next-dev" } : {}),
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
