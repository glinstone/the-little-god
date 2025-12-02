import path from 'path';

import type { NextConfig } from 'next';

import createMDX from '@next/mdx';

const isProduction = process.env.NODE_ENV === 'production';
const baseUrl = '/the-little-god';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProduction ? baseUrl : undefined,
  assetPrefix: isProduction ? baseUrl : undefined,
  images: { unoptimized: true },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      path.join(process.cwd(), 'src/plugins/remark-single-line-paragraphs.cjs'),
    ],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
