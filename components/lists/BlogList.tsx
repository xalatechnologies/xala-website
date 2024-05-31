"use client";

import { Blog } from '@/lib/interfaces';
import BlogCard from '../cards/BlogCard';

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="container mx-auto p-4">
     {blogs.map((blog: Blog) => (
        <BlogCard blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default BlogList;
