"use client";

import { News } from '@/lib/interfaces';
import NewsCard from '../cards/NewsCard';

const NewsList = ({ news }: { news: News[] }) => {
  return (
    <div className="container mx-auto p-4">
     {news.map((news: News) => (
        <NewsCard news={news} key={news.id} />
      ))}
    </div>
  );
};

export default NewsList;
