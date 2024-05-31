import { News } from "@/lib/interfaces";

const NewsCard = ({ news }: { news: News }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 w-80">
      <h2 className="text-xl font-bold mb-2">{news.title}</h2>
      <p>{news.content}</p>
    </div>
  )
};

export default NewsCard;
