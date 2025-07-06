import type { NextConfig } from "next";

const redirects = async () => [
  {
    source: '/',
    destination: '/home',
    permanent: true,
  },
];

const nextConfig: NextConfig = {
  images: {
    domains: ['img.clerk.com', 'res.cloudinary.com'],
  },
  redirects,
};

export default nextConfig;
