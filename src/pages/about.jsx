import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Photo from '../images/portrait.jpg';
import '../components/tailwind.css';

export const query = graphql`
    query AboutMeQuery {
        contentfulText(name: {eq: "About Me"}) {
            body {
                body
            }
        }
    }
`

const IndexPage = (query) => {

    const aboutMe = query.data.contentfulText.body.body;

    return (
        <>
            <Layout>
                <SEO title="About" />
                <div className="w-full flex items-center flex-col">
                    <Navbar />
                    <div className="w-full md:w-4/5 h-full flex flex-col items-center mt-10">
                        <div className="md:w-2/3">
                            <img src={Photo} alt="Kimberly Kemler" className="m-auto"></img>
                            <div className="mt-4 text-xs md:text-base">
                                {aboutMe}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default IndexPage;
