import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout';
import MainDropdown from '../components/main-dropdown';
import Triangle from '../images/triangle.svg';
import '../components/tailwind.css';

const IndexPage = () => (
    <>
        <Layout>
            <SEO title="About" />
        </Layout>
    </>
);

export default IndexPage;
