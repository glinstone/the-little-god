import { ARTICLES } from '@/data';

import Content from './content';

export default function Articles() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* 页面标题区域 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl text-foreground mb-4 tracking-tight">
            山玉的专栏《小上帝》
          </h1>
        </div>

        {/* 页面内容区域 */}
        <div className="flex flex-col gap-4">
          {ARTICLES.map((article) => (
            <div
              key={article}
              className="article-card p-6 border border-border rounded-md"
            >
              <Content slug={article} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
