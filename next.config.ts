import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pins the workspace root explicitly. Without this, Next.js was picking
  // up a stray package-lock.json elsewhere on the machine and guessing
  // wrong about the project root - silences that warning, not just noise.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
