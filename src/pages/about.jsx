import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Photo from '../images/portrait.jpg';
import '../components/tailwind.css';

export const query = graphql`
    query AboutMe {
        contentfulText {
            childContentfulTextBodyRichTextNode {
               json
            }
        }
    }
`

const IndexPage = (query) => {

    const aboutMe = query.data.contentfulText.childContentfulTextBodyRichTextNode.json;

    return (
        <>
            <Layout>
                <SEO title="About" />
                <div className="w-full flex items-center flex-col">
                    <Navbar />
                    <div className="w-full md:w-4/5 h-full flex flex-col items-center mt-10">
                        <div className="md:w-7/8">
                            <img src={Photo} alt="Kimberly Kemler" className="m-auto"></img>
                            <div className="mt-4 text-xs md:text-base">
                                {documentToReactComponents(aboutMe)}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default IndexPage;
