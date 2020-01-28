import React from 'react';
import { Link } from 'gatsby';
import MainDropdown from './main-dropdown';

const Navbar = () => (
    <nav className="flex justify-between mt-6 w-full items-end z-10">
        {/* Right side of nav */}
        <Link to="/" className="text-2xl hover:text-main">
            Kimberly Kemler
        </Link>
        {/* Left side of nav */}
        <div className="flex">
            <Link to="/poems" className="link text-4xl mr-4">
                Poems
            </Link>
            <Link to="/about" className="link text-4xl mr-4">
                About
            </Link>
            <MainDropdown>
                <Link to="/" className="link text-4xl">
                    Contact
                </Link>
            </MainDropdown>
        </div>
    </nav>
);

export default Navbar;
