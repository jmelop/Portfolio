import withPlaiceholder from '@plaiceholder/next'

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/v0/b/portfolio-4bb89.appspot.com/o/**",
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
