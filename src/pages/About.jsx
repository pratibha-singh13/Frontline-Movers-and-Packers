import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";

const About = () => {
    return (
        <div className="pt-20 px-6 py-12 bg-[#F3F4F6] text-[#333333]">
            {/* Hero Section */}
            <div className="relative bg-violet-100 rounded-2xl overflow-hidden mb-20 shadow-xl">
                <img
                    src={aboutImg}
                    alt="About Us"
                    className="w-full h-[400px] object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        About Frontline Movers & Packers
                    </h1>
                    <p className="text-lg max-w-2xl text-center">
                        Moving Memories, Not Just Belongings — Trusted Across India
                    </p>
                </div>
            </div>

            {/* Main Info Section */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.img
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    src={aboutImg}
                    alt="About Frontline Movers"
                    className="rounded-xl shadow-2xl w-full h-auto object-cover"
                />

                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl font-bold mb-4 text-violet-800">Who We Are</h2>
                    <p className="text-lg mb-4 leading-relaxed">
                        With over a decade of excellence, <strong className="text-violet-700">Frontline Movers & Packers</strong> stands out as one of India's most trusted relocation partners. We offer tailored logistics and moving services to homes, businesses, and individuals nationwide.
                    </p>
                    <ul className="list-disc ml-5 space-y-2 text-gray-700 font-medium">
                        <li>10+ Years of Experience & Expertise</li>
                        <li>Trained Professionals & Latest Equipment</li>
                        <li>Home, Office & Vehicle Shifting</li>
                        <li>Customized Packing Solutions</li>
                        <li>Affordable Premium & Economy Plans</li>
                        <li>Insurance, GST Invoicing & Timely Service</li>
                    </ul>
                </motion.div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="max-w-6xl mx-auto mt-24 grid md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 p-8 text-center"
                >
                    <h2 className="text-3xl font-bold text-violet-800 mb-4">🎯 Our Mission</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        To deliver world-class relocation services that are fast, reliable, and affordable. We strive to make every move a stress-free experience through innovation, professionalism, and commitment to customer satisfaction.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 p-8 text-center"
                >
                    <h2 className="text-3xl font-bold text-violet-800 mb-4">🔭 Our Vision</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        To be recognized as the most dependable and innovative logistics company in India, setting new standards for quality, safety, and customer satisfaction in the relocation industry.
                    </p>
                </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="mt-24 bg-violet-100 text-center rounded-2xl px-8 py-12 shadow-xl"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-violet-900 mb-6">
                    Move with Confidence. Move with Frontline.
                </h2>
                <p className="text-lg text-gray-800 max-w-3xl mx-auto mb-6">
                    Whether it’s your first home, a corporate transfer, or sending your vehicle across cities, we treat your journey as our own. Let us do the heavy lifting while you enjoy a seamless move.
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-violet-900 font-semibold text-lg px-8 py-4 rounded-full shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                >
                    Get a Free Quote
                </a>
            </motion.div>
        </div>
    );
};

export default About;
