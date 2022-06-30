import React from "react";
import {graphql, Link} from "gatsby";
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';
import Powerword from "../../components/powerword";

function Post({ data }) {
  const { post } = data;

  return (
      <>
        <Link to="/">Home</Link>
        <article>
          <h1>{ post.title }</h1>
          <div>{renderRichText(post.body, {
            renderNode: {
              [BLOCKS.PARAGRAPH]: (node, children) => {
                children = children.map((child, i) => {
                  const content = node.content[i];
                  const nextContent = node.content[i+1];

                  if (
                      content.nodeType === 'embedded-entry-inline' &&
                      content.data.target.__typename === "ContentfulPowerword" &&
                      nextContent &&
                      nextContent.nodeType === 'text'
                  ) {
                    const nextChild = children[i+1];
                    const powerword = content.data.target.title;
                    const pos = nextChild.toLowerCase().search(new RegExp(powerword, "i"));

                    if (pos >= 0) {
                      content.data.target.__placeholder = nextChild.substring(pos, powerword.length);
                      children[i+1] = nextChild.substring(0, pos) + nextChild.substring(pos + powerword.length);
                      return <Powerword word={content.data.target} key={i}></Powerword>
                    }
                  }

                  return child;
                });

                return React.createElement(
                  "p",
              null,
                  children
                )
              },
              [INLINES.EMBEDDED_ENTRY]: (node, children) => {
                if (
                    node.nodeType === "embedded-entry-inline" &&
                    node.data.target.__typename === "ContentfulPowerword"
                ) {
                  return null;
                }

                return children;
              }
            }
          })}</div>
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
      body {
        raw
        references {
          ... on ContentfulPowerword {
            contentful_id
            title
            description
            __typename
          }
        }
      }
    }
  }
`;

export default Post;