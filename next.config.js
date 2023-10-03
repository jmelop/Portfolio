/** @type {import('next').NextConfig} */

module.exports = {
  future: {
    webpack5: true,
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false
    };

    return config;
  },
  images: {
    domains: ['firebasestorage.googleapis.com', 'jmelop.com'],
    formats: ['image/avif', 'image/webp']
  },
};
