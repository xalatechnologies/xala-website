"use client";

import { useLocale } from '@/context/LocaleContext';
import BlogList from '@/components/lists/BlogList';
import { getTranslation } from '@/lib/helpers';

const BlogsPageClient = () => {
  const { translations, blogs, isLoading } = useLocale();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{getTranslation(translations, 'title', 'blogs')}</h1>
      <p>{getTranslation(translations, 'description', 'blogs')}</p>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default BlogsPageClient;
