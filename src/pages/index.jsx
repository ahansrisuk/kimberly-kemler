import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import MainDropdown from "../components/main-dropdown"
import Triangle from "../images/triangle.svg"
import "../components/tailwind.css"

const IndexPage = () => (
  <>
    <Layout>
    <SEO title="Home" />
      <div className="flex justify-center items-center m-auto">
        <h1 className="text-4xl mr-24 z-10">Kimberly Kemler</h1>
        <div className="flex flex-col z-10">
          <Link to="/poems" className="text-max link z-10">Poems</Link>
          <Link to="/about" className="text-max link z-10">About</Link>
          <div>
            <MainDropdown>
              <Link className="text-max link z-10">Contact</Link>
            </MainDropdown>
          </div>
        </div>
        <div className="absolute right-0 z-0 overflow-x-hidden">
          <img src={Triangle} alt="triangle" className="h-full w-full ml-20" />
        </div>
      </div>
    </Layout>
  </>
)

export default IndexPage
