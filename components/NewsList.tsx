"use client";

import { News } from '@/lib/interfaces';

const NewsList = ({ news }: { news: News[] }) => {
  return (
    <div className="container mx-auto p-4">
      {news.map((newsItem) => (
        <div key={newsItem.id} className="mb-4 p-4 border">
          <h2 className="text-2xl font-bold">{newsItem.title}</h2>
          <p>{newsItem.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
