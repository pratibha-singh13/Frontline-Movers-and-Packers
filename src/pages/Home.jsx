// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/relocation.jpg'; // Make sure this image exists or replace it

const Home = () => {
    return (
        <section className="bg-gray-100 py-20 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="max-w-xl text-center md:text-left">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    Welcome to <span className="text-blue-600">Frontline Movers & Packers</span>
                </h2>
                <p className="italic text-blue-500 mb-4 text-lg font-medium">
                    "Relations with Relocations..."
                </p>
                <p className="text-gray-700 text-md mb-6">
                    We provide expert services in House Shifting, Office Shifting, Vehicle Transportation, and Insurance coverage to make your relocation smooth and secure.
                </p>
                <Link to="/contact">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
                        Get a Quote
                    </button>
                </Link>
            </div>

            <div className="mb-10 md:mb-0 md:ml-10 w-full md:w-1/2">
                <img src={heroImg} alt="Relocation Services" className="rounded-xl shadow-xl" />
            </div>
        </section>
    );
};

export default Home;
