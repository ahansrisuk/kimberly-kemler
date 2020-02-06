import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Triangle from '../images/triangle.svg';
import '../components/tailwind.css';

const IndexPage = () => (
    <>
        <Layout>
            <SEO title="Home" />
            <div className="flex justify-center items-center m-auto">
                <h1 className="text-2xl md:text-4xl mr-16 md:mr-24 z-10">Kimberly Kemler</h1>
                <div className="flex flex-col z-10">
                    <Link to="/poems" className="text-2xl md:text-max link z-10">
                        Poems
                    </Link>
                    <Link to="/about" className="text-2xl md:text-max link z-10">
                        About
                    </Link>
                    <Link to="/contact" className="text-2xl md:text-max link z-10">
                        Contact
                    </Link>
                </div>
                <div className="absolute right-0 z-0 overflow-x-hidden">
                    <img
                        src={Triangle}
                        alt="triangle"
                        className="h-full w-full ml-20"
                    />
                </div>
            </div>
        </Layout>
    </>
);

export default IndexPage;
