import type { NextConfig } from "next";
import path from "path";
const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  /* config options here */
};

export default nextConfig;
