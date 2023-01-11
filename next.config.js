// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

module.exports = () => {
  const rewrites = () => {
    return [
      {
      source: "/helloWorld",
      destination: "http://127.0.0.1:8000/helloWorld",
      },
      {
      source: "/transcribe",
      destination: "http://127.0.0.1:8000/transcribe",
    }
    ];
  };
  return {
    rewrites,
  };
};
