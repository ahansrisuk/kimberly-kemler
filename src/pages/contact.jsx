import React from 'react';

import SEO from '../components/seo';
import Layout from '../components/layout';
import '../components/tailwind.css';

import Navbar from '../components/navbar';
import instagram from '../images/icons/instagram.svg';
import twitter from '../images/icons/twitter.svg';
import mail from '../images/icons/mail.svg';

const IndexPage = () => (
    <>
        <Layout>
            <SEO title="About" />
            <div className="w-full flex items-center flex-col">
                <Navbar />
                <div className="flex flex-col m-auto">
                    <div className="flex justify-end hover:text-main pb-2 text-sm md:text-base">
                        <a 
                            className="mr-6"
                            href="https://twitter.com/kimberlykemler"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @KimberlyKemler
                        </a>
                        <img src={twitter} alt="twitter"></img>
                    </div>
                    {/* single row */}
                    <div className="flex justify-end hover:text-main pb-2 text-sm md:text-base">
                        <a
                            className="mr-6"
                            href="https://www.instagram.com/kmykem/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @kmykem
                        </a>
                        <img src={instagram} alt="instagram"></img>
                    </div>
                    {/* single row */}
                    <div className="flex justify-end hover:text-main text-sm md:text-base">
                        <a className="mr-6" href="mailto:kkemler115@gmail.com">
                            kkemler115@gmail.com
                        </a>
                        <img src={mail} alt="mail"></img>
                    </div>
                </div>
            </div>
        </Layout>
    </>
);

export default IndexPage;
