import { Blog } from "@/lib/interfaces";

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 w-80">
      <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  )
};

export default BlogCard;
