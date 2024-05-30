import Head from 'next/head';

interface Post {
    id: number;
    title: string;
    excerpt: string;
}

const fetchPosts = async (): Promise<Post[]> => {
    // TODO: Simulate data fetch. Replace with actual data fetching logic.
    return [
        { id: 1, title: 'Understanding Office365', excerpt: 'An introduction to Office365 and its features.' },
        { id: 2, title: 'SharePoint Best Practices', excerpt: 'Learn the best practices for using SharePoint effectively.' },
        { id: 3, title: 'Custom Web Application Development', excerpt: 'Discover the process and benefits of custom web application development.' },
    ];
};

const Blog = async () => {
    const posts = await fetchPosts();

    return (
        <>
            <Head>
                <title>Blog - Xala Technologies</title>
                <meta name="description" content="Read the latest articles and updates from Xala Technologies on Office365, SharePoint, web application development, and more." />
            </Head>
            <section className="text-center p-8">
                <h1 className="text-4xl font-bold">Blog</h1>
                <div className="mt-8">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                            <p>{post.excerpt}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Blog;
