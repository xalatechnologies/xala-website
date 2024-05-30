import Head from 'next/head';

interface Article {
    id: number;
    title: string;
    summary: string;
}

const fetchArticles = async (): Promise<Article[]> => {
    // TODO: Simulate data fetch. Replace with actual data fetching logic.
    return [
        { id: 1, title: 'Getting Started with Office365', summary: 'A comprehensive guide to get started with Office365.' },
        { id: 2, title: 'SharePoint Tips and Tricks', summary: 'Enhance your SharePoint usage with these tips and tricks.' },
        { id: 3, title: 'Web Application Development FAQs', summary: 'Frequently asked questions about web application development.' },
    ];
};

const KnowledgeBase = async () => {
    const articles = await fetchArticles();

    return (
        <>
            <Head>
                <title>Knowledge Base - Xala Technologies</title>
                <meta name="description" content="Explore our knowledge base for detailed articles and guides on Office365, SharePoint, and web application development." />
            </Head>
            <section className="text-center p-8">
                <h1 className="text-4xl font-bold">Knowledge Base</h1>
                <div className="mt-8">
                    {articles.map((article) => (
                        <div key={article.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                            <p>{article.summary}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default KnowledgeBase;
