import type { NextConfig } from 'next';

const  nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Add this line to specify the external image domain
  },
};

module.exports= nextConfig;
