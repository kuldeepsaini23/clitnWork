/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['drive.google.com','www.pexels.com', 'images.pexels.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next",
          name: "static/media/[name].[hash].[ext]",
        },
      },
    });

    return config;
  },
}

module.exports = nextConfig
