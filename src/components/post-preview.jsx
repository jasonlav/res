import React from 'react';
import { routePath } from '../utils';
import {Link} from "gatsby";

function PostPreview({ post }) {
  return (
      <section>
        <h2><Link to={routePath(post)}>{post.title}</Link></h2>
      </section>
  )
}

export default PostPreview;
