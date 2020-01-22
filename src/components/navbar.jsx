import React from "react";
import { Link } from "gatsby";

const Navbar = () => (
    <nav className="flex justify-between mt-6 w-full items-end">
        {/* Right side of nav */}
        <Link to="/" className="text-2xl hover:text-main">Kimberly Kemler</Link>

        {/* Left side of nav */}
        <div>
            <Link to="/poems" className="link text-4xl mr-4">Poems</Link>
            <Link to="/about" className="link text-4xl mr-4">About</Link>
            <Link to="/" className="link text-4xl">Contact</Link>
        </div>
        
    </nav>
)

export default Navbar;
