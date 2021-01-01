import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Helmet from "../components/Helmet"

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
      }
    }
  }
`

const blog = props => {
  const jsonData = JSON.parse(props.data.contentfulBlogPost.body.raw)
  console.log(jsonData)
  const options = {
    renderNode: {
      "embeded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        console.log(node)
        return <img alt={alt} url={url} />
      },
    },
  }
  return (
    <div>
      <Helmet title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <h2>{props.data.contentfulBlogPost.publishedDate}</h2>
      {documentToReactComponents(jsonData, options)}
    </div>
  )
}

export default blog
