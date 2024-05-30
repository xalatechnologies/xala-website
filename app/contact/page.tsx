import Head from 'next/head';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us - Xala Technologies</title>
                <meta name="description" content="Get in touch with Xala Technologies for top-notch services in Office365, SharePoint, and custom web application development." />
            </Head>
            <section className="text-center p-8">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <form className="mt-8 max-w-md mx-auto">
                    <label className="block mb-2" htmlFor="name">Name:</label>
                    <input className="w-full p-2 border border-gray-300 rounded mb-4" type="text" id="name" name="name" required />

                    <label className="block mb-2" htmlFor="email">Email:</label>
                    <input className="w-full p-2 border border-gray-300 rounded mb-4" type="email" id="email" name="email" required />

                    <label className="block mb-2" htmlFor="message">Message:</label>
                    <textarea className="w-full p-2 border border-gray-300 rounded mb-4" id="message" name="message" required />

                    <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">Send</button>
                </form>
            </section>
        </>
    );
}
