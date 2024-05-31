import { Portfolio } from "@/lib/interfaces";

const PortfolioCard = ({ portfolio }: { portfolio: Portfolio }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 w-80">
      <h2 className="text-xl font-bold mb-2">{portfolio.title}</h2>
      <p>{portfolio.description}</p>
    </div>
  )
};

export default PortfolioCard;
