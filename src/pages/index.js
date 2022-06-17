import * as React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <main>
      Hello world!
      {data.posts.nodes.length && data.posts.nodes.map((post, key) => {
        return (<section key={key}>{post.title}</section>);
      })}
    </main>
  )
}

export const query = graphql`
  query {
    posts: allContentfulPost {
      nodes {
        title
      }
    }
  }
`;

export default IndexPage
