import path from 'path';

import type { NextConfig } from 'next';

import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
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
