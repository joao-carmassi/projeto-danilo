import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  output: 'export',
  assetPrefix: process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH,
  basePath: process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH,
  images: {
    loader: 'custom',
    imageSizes: [128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  transpilePackages: ['next-image-export-optimizer'],
  env: {
    nextImageExportOptimizer_imageFolderPath: 'public/assets',
    nextImageExportOptimizer_exportFolderPath: 'out',
    nextImageExportOptimizer_quality: '80',
    nextImageExportOptimizer_storePicturesInWEBP: 'true',
    nextImageExportOptimizer_generateAndUseBlurImages: 'false',
    nextImageExportOptimizer_exportFolderName: 'nextImageExportOptimizer',
    nextImageExportOptimizer_remoteImageCacheTTL: '0',
  },
};

export default nextConfig;
