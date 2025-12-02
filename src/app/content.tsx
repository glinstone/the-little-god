'use client';

import { useEffect, useState } from 'react';

export type ContentProps = {
  slug: string;
};

export default function Content({ slug }: ContentProps) {
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
    <div>
      {Comp ? <Comp /> : <p>加载中...</p>}
      <a href={`/articles/${slug}`}>Read more</a>
    </div>
  );
}
