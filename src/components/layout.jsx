/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./tailwind.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=EB+Garamond&display=swap" rel="stylesheet"></link>
      <div className="h-full flex flex-col items-center font-body">
        <main className="flex w-2/3 h-full">
          { children }
        </main>
        <footer className="font-min pb-3">
          © {new Date().getFullYear()}, Created by Allen Hansrisuk.
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
