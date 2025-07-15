/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    unoptimized: true, // ✅ recommandé pour output: 'export'
  },
  experimental: {
    optimizeCss: true,
    optimizeFonts: true,
    legacyBrowsers: false, // ✅ Désactive les vieux polyfills
  },
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
