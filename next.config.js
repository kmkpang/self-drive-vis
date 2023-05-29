module.exports = {
  images: {
    domains: ['storage.googleapis.com', 'img.freepik.com', 'erp-test.task.cpocloud.net'],
    unoptimized: true,
  },
  transpilePackages: ['react-use-localstorage', 'next-firebase-hosting-rewrites'],
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}',
    },
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    lodash: {
      transform: 'lodash/{{member}}',
    },
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)?', // Matches all pages
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            dimensions: false,
          },
        },
      ],
    });

    return config;
  },
};
