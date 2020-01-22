import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Triangle from "../images/triangle.svg"
import "../components/tailwind.css"

const IndexPage = () => (
  <>
  <Layout>
    <div className="flex justify-center items-center m-auto">
      <h1 className="text-4xl mr-24 z-10">Kimberly Kemler</h1>
      <div className="flex flex-col z-10">
        <Link to="/poems" className="text-max link z-10">Poems</Link>
        <Link to="/about" className="text-max link z-10">About</Link>
        <Link className="text-max link z-10">Contact</Link>
      </div>
      <div className="absolute right-0 z-0 overflow-x-hidden">
        <img src={Triangle} alt="triangle" className="h-full w-full ml-20" />
      </div>
    </div>
  </Layout>
    {/* <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </>
)

export default IndexPage
