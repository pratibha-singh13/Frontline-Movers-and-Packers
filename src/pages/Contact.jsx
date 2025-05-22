import React from 'react';

const Contact = () => {
    return (
        <section className="min-h-screen px-6 py-16 bg-white text-gray-800">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-8">Have a question or want a quote? Reach out to us!</p>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 border rounded-lg focus:outline-blue-400"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 border rounded-lg focus:outline-blue-400"
                    />
                    <textarea
                        rows="4"
                        placeholder="Your Message"
                        className="w-full p-3 border rounded-lg focus:outline-blue-400"
                    ></textarea>
                    <button
                        type="submit"
                        disabled
                        className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold opacity-70 cursor-not-allowed"
                    >
                        Send Message (Coming Soon)
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact; // ✅ This line is required
