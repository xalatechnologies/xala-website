"use client";

import { Blog } from '@/lib/interfaces';

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="container mx-auto p-4">
      {blogs.map((blog) => (
        <div key={blog.id} className="mb-4 p-4 border">
          <h2 className="text-2xl font-bold">{blog.title}</h2>
          <p>{blog.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
