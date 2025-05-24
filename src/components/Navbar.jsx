import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const linkClasses = ({ isActive }) =>
        `block px-3 py-2 rounded-md text-base font-medium ${isActive
            ? "text-[#4B0082] underline"
            : "text-gray-700 hover:text-[#4B0082] hover:ring-2 hover:ring-[#F9A825] transition duration-300"
        }`;

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo and brand */}
                <Link to="/" className="flex items-center space-x-2">
                    <img src={logo} alt="Frontline Movers Logo" className="h-10 w-10" />
                    <h1 className="text-xl font-bold text-[#4B0082]">
                        Frontline Movers and Packers
                    </h1>
                </Link>

                {/* Desktop menu */}
                <div className="hidden md:flex space-x-6">
                    <NavLink to="/" className={linkClasses} end>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={linkClasses}>
                        About
                    </NavLink>
                    <NavLink to="/services" className={linkClasses}>
                        Services
                    </NavLink>
                    <NavLink to="/gallery" className={linkClasses}>
                        Gallery
                    </NavLink>
                    <NavLink to="/contact" className={linkClasses}>
                        Contact
                    </NavLink>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#4B0082] focus:outline-none focus:ring-2 focus:ring-[#F9A825] transition duration-300"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-1">
                    <NavLink to="/" className={linkClasses} end onClick={() => setMenuOpen(false)}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={linkClasses} onClick={() => setMenuOpen(false)}>
                        About
                    </NavLink>
                    <NavLink to="/services" className={linkClasses} onClick={() => setMenuOpen(false)}>
                        Services
                    </NavLink>
                    <NavLink to="/gallery" className={linkClasses} onClick={() => setMenuOpen(false)}>
                        Gallery
                    </NavLink>

                    <NavLink to="/contact" className={linkClasses} onClick={() => setMenuOpen(false)}>
                        Contact
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
