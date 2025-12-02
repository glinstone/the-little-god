import { ARTICLES } from '@/data';

import Content from './content';

export default function Articles() {
  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {ARTICLES.map((article) => (
          <li key={article}>
            <Content slug={article} />
          </li>
        ))}
      </ul>
    </div>
  );
}
