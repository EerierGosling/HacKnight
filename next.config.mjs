/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/youtube",
        destination: "https://www.youtube.com/@HacKnight-ly9zq",
        permanent: true,
      },
      {
        source: "/workshop-signup",
        destination: "https://forms.gle/YPmdMqBVurgyT2Cc6",
        permanent: false,
      }
    ];
  },
};

export default nextConfig;