'use client';

import './content.css';

import { useEffect, useState } from 'react';

export type ContentProps = {
  slug: string;
  showReadMore?: boolean;
};

export default function Content({ slug, showReadMore = true }: ContentProps) {
  const [Comp, setComp] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    let mounted = true;

    import(`@/articles/${slug}.mdx`)
      .then((mod) => {
        if (mounted) setComp(() => mod.default);
      })
      .catch(() => {
        // 这里可以处理加载失败，例如显示404组件
        setComp(() => () => <p>内容加载失败</p>);
      });

    return () => {
      mounted = false;
    };
  }, [slug]);

  return (
    <div className="h-full flex flex-col">
      {/* 内容区域 */}
      <div className="flex-1 py-2">
        {Comp ? (
          <div className="article-content space-y-3">
            <Comp />
          </div>
        ) : (
          <div className="flex items-center justify-center h-32">
            <div className="text-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mx-auto mb-2"></div>
              <p className="text-muted-foreground text-sm">加载中...</p>
            </div>
          </div>
        )}
      </div>

      {/* 底部链接 */}
      {showReadMore && (
        <div className="mt-auto pt-2 border-t border-border">
          <a
            href={`/articles/${slug}`}
            className="read-more-link inline-flex items-center gap-1"
          >
            阅读全文
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
