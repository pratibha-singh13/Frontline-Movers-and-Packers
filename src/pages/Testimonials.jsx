import React from 'react';

const testimonials = [
    {
        name: 'Aarav Mehta',
        feedback: 'Fast delivery and great support! Highly recommended.',
    },
    {
        name: 'Priya Sharma',
        feedback: 'Professional and on-time every time. Excellent service.',
    },
    {
        name: 'Ravi Kumar',
        feedback: 'Reliable logistics partner for my business expansion.',
    },
];

const Testimonials = () => {
    return (
        <section className="min-h-screen px-6 py-16 bg-blue-50 text-gray-800">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-10">What Our Clients Say</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg">
                            <p className="text-sm italic text-gray-600">“{t.feedback}”</p>
                            <p className="mt-4 font-bold text-blue-900">- {t.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials; // ✅ This is required
