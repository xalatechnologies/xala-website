"use client";

import { News } from '@/lib/models';
import NewsCard from '../cards/NewsCard';

const NewsList = ({ news }: { news: News[] }) => {
  return (
    <div className="container mx-auto p-4">
      {news.map((news: News) => (
        <NewsCard news={news} key={news._id} />
      ))}
    </div>
  );
};

export default NewsList;
