import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Photo from '../images/portrait.jpg';
import '../components/tailwind.css';

const IndexPage = () => (
    <>
        <Layout>
            <SEO title="About" />
            <div className="w-full flex items-center flex-col">
                <Navbar />
                <div className="w-4/5 h-full flex flex-col items-center mt-10">
                    <div className="w-2/3">
                        <img src={Photo} alt="Kimberly Kemler" className="m-auto"></img>
                        <div className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet quam efficitur, lacinia mauris ac, auctor ipsum. 
                            Sed non nisi et turpis pulvinar vulputate. Suspendisse rutrum sagittis urna. Maecenas dictum suscipit pellentesque. Cras id
                            feugiat sapien. Sed ut libero sit amet eros mollis euismod. Duis eu purus vitae elit imperdiet dictum ac vitae ante. Sed 
                            dapibus tempus arcu quis pulvinar. Donec dignissim, nisi quis luctus auctor, dolor arcu scelerisque diam, vitae aliquet 
                            turpis dui at nunc.
                        </div>
                    </div>
                    
                </div>
            </div>
        </Layout>
    </>
);

export default IndexPage;
