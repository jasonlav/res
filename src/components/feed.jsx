import React from "react";
import PostPreview from "./post-preview";

function Feed({ posts }) {
  return (
      <>
        {posts.nodes.length && posts.nodes.map((post, key) => {
          return (
              <PostPreview key={key} post={post}></PostPreview>
          );
        })}
      </>
  )
}

export default Feed;