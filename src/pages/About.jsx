import React from 'react';

const About = () => {
    return (
        <section className="min-h-screen px-6 py-16 bg-white text-gray-800">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">About Us</h2>
                <p className="text-lg leading-relaxed">
                    At <span className="font-semibold text-blue-700">TransPorto</span>, we are committed to revolutionizing the logistics and transportation industry.
                    With over a decade of experience, our mission is to provide safe, reliable, and on-time transport solutions for businesses and individuals.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                    Our fleet includes trucks, vans, and specialized vehicles to meet diverse transport needs. We pride ourselves on customer satisfaction,
                    technological integration, and professional service.
                </p>
            </div>
        </section>
    );
};

export default About;
