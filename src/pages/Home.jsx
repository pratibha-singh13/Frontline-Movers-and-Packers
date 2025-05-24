import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.jpg"; // Ensure this image is in your assets folder

const Home = () => {
    return (
        <div className="pt-20 bg-gray-50">
            {/* Hero Section */}
            <section
                className="relative h-[80vh] bg-cover bg-center bg-no-repeat text-white flex items-center justify-center px-4 text-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        Frontline Movers & Packers
                    </motion.h1>
                    <p className="text-xl md:text-2xl mt-4 mb-10 italic tracking-wide drop-shadow-sm font-medium max-w-xl mx-auto">
                        Relations with Relocations...
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-violet-900 font-semibold px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                    >
                        Get a Free Quote
                    </Link>
                </div>
            </section>

            {/* About Preview */}
            <section className="py-20 px-6 bg-white text-center max-w-5xl mx-auto">
                <h2
                    className="text-4xl font-extrabold mb-6 text-violet-900"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                    About Us
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                    We are a professional moving and packing company offering a wide range of services including home shifting, office relocation, vehicle transport, and insurance. Whether you need a standard or premium service, we ensure secure and timely delivery with a personal touch.
                </p>
                <Link
                    to="/about"
                    className="mt-8 inline-block text-violet-700 font-semibold hover:underline hover:text-violet-900"
                >
                    Learn More
                </Link>
            </section>

            {/* Services Preview */}
            <section className="py-20 px-6 bg-violet-50">
                <h2
                    className="text-4xl font-extrabold text-center mb-12 text-violet-900"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                    Our Services
                </h2>
                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {[
                        { title: "House Shifting", emoji: "🏠" },
                        { title: "Office Shifting", emoji: "🏢" },
                        { title: "Vehicle Transport", emoji: "🚚" },
                        { title: "Insurance", emoji: "📋" },
                        { title: "Normal & Premium Deals", emoji: "🔖" },
                        { title: "GST & Secure Transit", emoji: "🧾" }
                    ].map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 cursor-pointer"
                        >
                            <div className="text-5xl mb-4">{service.emoji}</div>
                            <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link
                        to="/services"
                        className="text-violet-700 font-semibold hover:underline hover:text-violet-900"
                    >
                        View All Services
                    </Link>
                </div>
            </section>

            {/* Contact Summary */}
            <section className="py-20 px-6 bg-white text-center max-w-4xl mx-auto">
                <h2
                    className="text-4xl font-extrabold mb-6 text-violet-900"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                    Need Help With Relocation?
                </h2>
                <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto">
                    Call us now or send a message to get started with your smooth and hassle-free move.
                </p>
                <Link
                    to="/contact"
                    className="inline-block bg-yellow-400 text-violet-900 px-8 py-4 rounded-full font-semibold shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                >
                    Contact Us
                </Link>
            </section>
        </div>
    );
};

export default Home;
