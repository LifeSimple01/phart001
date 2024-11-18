import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'app.sa.ac.th',
        port: '', 
        pathname: '/gubguru/pages/registerseller/uploads/**', 
      },
    ],
  },
};

export default nextConfig;
