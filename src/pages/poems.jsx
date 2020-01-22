import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Poem from "../components/poem"
import SEO from "../components/seo"

const Poems = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="w-full flex items-center flex-col">
      <Navbar />
      {/* list of poems */}
      <div className="w-4/5">
        <table className="table-fixed w-full">
          <thead>
            <th className="w-2/3"></th>
            <th className="w-1/3"></th>
          </thead>
          <tbody>
            <Poem 
              name="Ode to the Quick Brown Fox"
              publication="Rattle" />
          </tbody>

        </table>
      </div>
    </div>
  </Layout>
)

export default Poems 
