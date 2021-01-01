import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Helmet from "../components/Helmet"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  return (
    <div>
      <Helmet title="Home" />
      <Header />
      <h1>{data.site.siteMetadata.title}</h1>
      <h2>{data.site.siteMetadata.author}</h2>
      Hello world!<Link to="/about">Go to about page</Link>
      <Footer />
    </div>
  )
}
