import React from 'react';
import { Link } from 'gatsby';
import MainDropdown from './main-dropdown';

const Navbar = () => (
    <nav className="flex justify-between mt-6 w-full items-end z-20">
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
            <MainDropdown>
                <span className="text-sm small-caps hover:text-gray-400 md:text-4xl">
                    Contact
                </span>
            </MainDropdown>
        </div>
    </nav>
);

export default Navbar;
