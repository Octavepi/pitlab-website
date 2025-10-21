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
  
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://sepolia.base.org https://mainnet.base.org https://sepolia.basescan.org https://basescan.org"
          }
        ],
      },
    ];
  },
  
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
