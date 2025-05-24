import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#4B0082] text-white text-center py-6 mt-10 shadow-inner">
            <p className="text-sm font-medium">
                &copy; {new Date().getFullYear()} Frontline Movers & Packers. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
