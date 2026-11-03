import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // cacheComponents & partialPrefetching (fitur eksperimental Next.js 16)
  // dinonaktifkan — sebelumnya memicu error prerender ("unstable value")
  // dan kemungkinan juga menyebabkan mismatch hydration client/server.
  // Situs ini statis & sederhana, tidak perlu fitur eksperimental tersebut.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
