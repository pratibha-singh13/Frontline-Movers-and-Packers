// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md py-4 px-6 md:px-20 flex items-center justify-between">
            <div className="text-left">
                <h1 className="text-xl md:text-2xl font-bold text-blue-600">Frontline Movers & Packers</h1>
                <p className="text-sm md:text-md text-gray-500 italic -mt-1">Relations with Relocations...</p>
            </div>
            <div className="space-x-6 text-gray-700 font-medium hidden md:flex">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
