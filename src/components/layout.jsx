/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import './tailwind.css';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    author
                }
            }
        }
    `);

    const author = data.site.siteMetadata.author;

    return (
        <>
            <link
                href="https://fonts.googleapis.com/css?family=EB+Garamond&display=swap"
                rel="stylesheet"
            ></link>
            <div className="h-full flex flex-col items-center font-body overflow-x-hidden">
                <main className="flex w-4/5 md:w-2/3 flex-grow overflow-y-scroll">{children}</main>
                <footer className="text-min md:text-base my-3">
                    © {new Date().getFullYear()}, Created by {author} 
                </footer>
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
