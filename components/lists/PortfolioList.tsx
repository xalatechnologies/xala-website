"use client";

import { Portfolio } from '@/lib/interfaces';
import PortfolioCard from '../cards/PortfolioCard';

const PortfolioList = ({ portfolios }: { portfolios: Portfolio[] }) => {
  return (
    <div className="container mx-auto p-4">
     {portfolios.map((portfolio: Portfolio) => (
        <PortfolioCard portfolio={portfolio} key={portfolio.id} />
      ))}
    </div>
  );
};

export default PortfolioList;
