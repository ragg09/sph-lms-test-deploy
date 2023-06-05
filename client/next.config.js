/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'cdn.idropnews.com',
      'www.shortform.com',
      'www.simplilearn.com',
      'images.unsplash.com',
      'campustechnology.com',
      'res.cloudinary.com'
    ]
  }
};

module.exports = nextConfig;
