import * as React from "react"
import { graphql } from "gatsby"
import PostPreview from "../components/post-preview";

const IndexPage = ({ data }) => {
  return (
    <>
      {data.posts.nodes.length && data.posts.nodes.map((post, key) => {
        return (
            <PostPreview key={key} post={post}></PostPreview>
        );
      })}
    </>
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
