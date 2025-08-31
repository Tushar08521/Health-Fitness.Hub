// Next.js configuration
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Helps catch potential issues in development
  swcMinify: true,       // Uses Next.js SWC compiler for faster builds and smaller output

  images: {
    domains: [
      "source.unsplash.com", // Allow Unsplash images
      "images.unsplash.com", // Another common Unsplash domain
    ],
  },

  // Optional: trailingSlash true if you want URLs like /workout/
  // trailingSlash: true,

  // Optional: Custom headers for security and SEO
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
