import './globals.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { cn } from '@/lib/utils';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '山玉的专栏《小上帝》',
  description:
    '你困了，你又不肯睡觉。当你困了又不肯睡觉的时候，你就变成一个比你自己更小的孩子。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={cn(geistSans.variable, geistMono.variable, 'antialiased')}
      >
        {children}
      </body>
    </html>
  );
}
