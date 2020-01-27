import React from 'react';

import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Poem from '../components/poem';
import SEO from '../components/seo';
import { graphql } from "gatsby";

import Circle from '../images/circle.svg';

export const query = graphql`
    query PoemsQuery {
        allContentfulPoem(sort: {fields: publishedDate, order: DESC}) {
            nodes {
                name
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
                <div className="w-4/5 h-full flex items-center justify-center">
                    <table className="w-2/3 z-10">
                        <tbody>
                            {poems.map( (poem) => 
                                <Poem
                                    name={poem.name}
                                    url={poem.url}
                                    publication={poem.publication}
                                ></Poem>
                            )}
                        </tbody>
                    </table>
                    <div className="absolute left-0 z-0">
                        <img src={Circle} alt="circle" className="ml-56" />
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Poems;
