"use client";

import { Portfolio } from '@/lib/interfaces';

const PortfolioList = ({ portfolio }: { portfolio: Portfolio[] }) => {
  return (
    <div className="container mx-auto p-4">
      {portfolio.map((item) => (
        <div key={item.id} className="mb-4 p-4 border">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PortfolioList;
