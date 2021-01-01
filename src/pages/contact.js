import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Helmet from "../components/Helmet"

const contact = () => {
  return (
    <div>
      <Helmet title="Contact" />
      <Header />
      <h1>This is my contact page </h1>
      <Footer />
    </div>
  )
}

export default contact
