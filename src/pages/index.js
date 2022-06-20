import * as React from "react"
import { graphql } from "gatsby"
import PostPreview from "../components/post-preview";
import Feed from "../components/feed";

const IndexPage = ({ data }) => {
  const { posts } = data;

  return (
    <>
      <Feed posts={posts}></Feed>
    </>
  )
}

export const query = graphql`
  query {
    posts: allContentfulPost {
      nodes {
        title
        slug
        internal {
          type
        }
      }
    }
  }
`;

export default IndexPage
