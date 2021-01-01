import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Helmet from "../components/Helmet"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            id
          }
        }
      }
    }
  `)

  return (
    <div>
      <h1>Blog</h1>
      <Helmet title="blog" />
      <ol>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li key={Math.random()}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
              </Link>
              <p>{edge.node.publishedDate}</p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default Blog
