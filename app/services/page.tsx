import Head from 'next/head';
import ServiceCard from '../../components/ServiceCard';

interface Service {
    title: string;
    description: string;
}

const fetchServices = async (): Promise<Service[]> => {
    // TODO: Simulate data fetch. Replace with actual data fetching logic.
    return [
        { title: 'Office365 Integration', description: 'We provide seamless Office365 integration for your business.' },
        { title: 'SharePoint Services', description: 'Custom SharePoint solutions tailored to your needs.' },
        { title: 'Web Application Development', description: 'Developing modern web applications to streamline your business processes.' },
        { title: 'Software Development Consultancy', description: 'Expert consultancy for your software development projects.' },
    ];
};

const Services = async () => {
    const services = await fetchServices();

    return (
        <>
            <Head>
                <title>Our Services - Xala Technologies</title>
                <meta name="description" content="Discover our top-notch services in Office365, SharePoint, custom web application development, and software development consultancy." />
            </Head>
            <section className="text-center p-8">
                <h1 className="text-4xl font-bold">Our Services</h1>
                <div className="flex flex-wrap justify-around mt-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} title={service.title} description={service.description} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Services;
