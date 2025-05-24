const Contact = () => {
    return (
        <div className="pt-16 px-6 py-12 bg-[#F3F4F6] text-[#333333]">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
                {/* Contact Info */}
                <div>
                    <h1 className="text-4xl font-bold text-[#4B0082] mb-6">Contact Us</h1>
                    <p className="mb-4">
                        Reach out to <strong>Frontline Movers & Packers</strong> for stress-free shifting services. We're happy to assist you!
                    </p>
                    <div className="space-y-3 text-gray-700">
                        <p>📞 <strong>Phone:</strong> +91-9347701506</p>
                        <p>📞 <strong>Phone:</strong> +91-8008744878</p>
                        <p>📧 <strong>Email:</strong> frontlinemovers862@gmail.com</p>
                        <p>📍 <strong>Address:</strong> Shop No. 8, Ali Complex, Opp. GST Office, Old Bowenpally, Secunderabad, Telangana</p>
                    </div>

                    {/* Google Map */}
                    <div className="mt-6 rounded-xl overflow-hidden shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.017754060042!2d78.48036807507448!3d17.45796910113569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a56b5e1e8d9%3A0xf1a6f8b5f898c5cf!2sOld%20Bowenpally%2C%20Secunderabad%2C%20Telangana%20500011!5e0!3m2!1sen!2sin!4v1716538573709!5m2!1sen!2sin"
                            width="100%"
                            height="250"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-64 rounded-xl border-0"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    className="bg-white rounded-xl shadow-lg p-6 space-y-4"
                    action="https://formsubmit.co/frontlinemovers862@gmail.com"
                    method="POST"
                >
                    <h2 className="text-2xl font-semibold text-[#4B0082] mb-4">Send us a message</h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B0082]"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B0082]"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B0082]"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-[#4B0082] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5C2D91] hover:shadow-xl transition duration-300 hover:ring-2 hover:ring-[#F9A825]"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
