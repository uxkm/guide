import path from 'node:path';
import { fileURLToPath } from 'node:url';
import createMDX from '@next/mdx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function normalizeBasePath(value) {
  if (!value || value === '/') {
    return '';
  }

  return `/${value.replace(/^\/+|\/+$/g, '')}`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  devIndicators: false,
  output: 'export',
  trailingSlash: true,
  basePath: normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH),
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [
      path.resolve(__dirname, 'src/scss'),
      path.resolve(__dirname, 'node_modules'),
    ],
    loadPaths: [
      path.resolve(__dirname, 'src/scss'),
      path.resolve(__dirname, 'node_modules'),
    ],
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
