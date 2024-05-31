import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                <title>About Us - Xala Technologies</title>
                <meta name="description" content="Learn more about Xala Technologies, our team, and our expertise in Office365, SharePoint, and custom web application development." />
            </Head>
            <section className="text-center p-8">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="mt-4">We are a team of top-notch professionals with expertise in Office365, SharePoint, custom web application development, and software development consultancy.</p>
            </section>
        </>
    );
}
