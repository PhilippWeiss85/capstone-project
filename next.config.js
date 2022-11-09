/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, //https://github.com/chartjs/Chart.js/issues/10673 | had to switch from true to false in order to get the bar chart working
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
