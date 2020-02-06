import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
    <nav className="flex justify-between mt-4 w-full items-end z-20">
        {/* Right side of nav */}
        <Link to="/" className="text-min md:text-2xl hover:text-gray-500">
            Kimberly Kemler
        </Link>
        {/* Left side of nav */}
        <div className="flex items-end">
            <Link to="/poems" className="text-sm link md:text-4xl mr-4">
                Poems
            </Link>
            <Link to="/about" className="text-sm link md:text-4xl mr-4">
                About
            </Link>
            <Link to="/contact" className="text-sm link md:text-4xl mr-4">
                Contact
            </Link>
        </div>
    </nav>
);

export default Navbar;
