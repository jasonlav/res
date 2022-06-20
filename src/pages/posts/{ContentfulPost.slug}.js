import React from "react";
import {graphql, Link} from "gatsby";

function Post({ data }) {
  const { post } = data;

  return (
      <>
        <Link to="/">Home</Link>
        <article>
          <h1>{ post.title }</h1>
        </article>
      </>
  )
}

export const query = graphql`
  query ($id: String) {
    post: contentfulPost(id: { eq: $id }) {
      id
      title
      slug
    }
  }
`;

export default Post;