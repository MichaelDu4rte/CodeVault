import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/snippets',
        permanent: true, // ou false, caso queira um redirecionamento temporário
      },
    ];
  },
};

export default nextConfig;
