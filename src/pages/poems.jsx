import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Poem from '../components/poem';
import SEO from '../components/seo';

import Circle from '../images/circle.svg';

export const query = graphql`
    query PoemsQuery {
        allContentfulPoem(sort: {fields: publishedDate, order: DESC}) {
            nodes {
                name {
                    json
                }
                url
                publication
                publishedDate
            }
        } 
    }
`

const Poems = (query) => {

    console.log(query.data);
    const poems = query.data.allContentfulPoem.nodes;

    return (
        <Layout>
            <SEO title="Poems" />
            <div className="w-full flex items-center flex-col">
                <Navbar />
                {/* list of poems */}
                <div className="w-full md:w-4/5 h-full flex items-center overflow-y-auto">
                    <table className="md:m-auto z-10">
                        <tbody>
                            {poems.map( (poem, index) => 
                                <Poem
                                    key={index}
                                    url={poem.url}
                                    publication={poem.publication}
                                >
                                    {/* poem display title with rich text styling */}
                                    {documentToReactComponents(poem.name.json)}
                                </Poem>
                            )}
                        </tbody>
                    </table>
                    <div className="absolute left-0 z-0 overflow-x-hidden">
                        <img src={Circle} alt="circle" className="ml-56" />
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Poems;
