import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Former routes now live as sections on the single page.
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/skills", destination: "/#skills", permanent: true },
      { source: "/my-projects", destination: "/#work", permanent: true },
      { source: "/contact-me", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
