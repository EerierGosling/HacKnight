/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/youtube",
        destination: "https://www.youtube.com/@HacKnight-ly9zq",
        permanent: true,
      }
    ];
  },
};

export default nextConfig;