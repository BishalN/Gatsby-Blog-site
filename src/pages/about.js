import React from "react"
import { Link } from "gatsby"

import Header from "../components/Header"
import Footer from "../components/Footer"

const about = () => {
  return (
    <div>
      <Header />
      hello about
      <h1>
        Go to my contact page<Link to="/contact">GOOOO</Link>
      </h1>
      <Footer />
    </div>
  )
}

export default about
