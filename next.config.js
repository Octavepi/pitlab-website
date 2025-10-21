/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // IPFS-friendly URLs
  assetPrefix: process.env.ASSET_PREFIX || '',
  
  // Optimize for IPFS
  compress: true,
  
  // Environment variables available to the browser
  env: {
    SITE_NAME: 'PITLAB',
    SITE_DESCRIPTION: 'Sweat-secured. ARM-powered. Built in the PIT.',
    SITE_URL: process.env.SITE_URL || 'https://pitlab.eth',
  },
  
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Markdown support
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    
    return config;
  },
};

module.exports = nextConfig;
