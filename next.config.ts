import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/groups/:groupId((?!/new).)*',
        destination: '/groups/:groupId*/records',
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
      {
        protocol: 'https',
        hostname: 'nb04-seven-team1.onrender.com',
      },
      {
        protocol: 'https',
        hostname: 'sprint-be-project.s3.ap-northeast-2.amazonaws.com',
      },
            {
        protocol: 'http',
        hostname: '59.14.95.115',
        port: '3030',
      },
    ],
  },
};

export default nextConfig;
