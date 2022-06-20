import React from 'react';
import { routePath } from '../utils';
import {Link} from "gatsby";

function PostPreview({ post }) {
  return (
      <section>
        <h2><Link to={routePath(post)}>{post.title}</Link></h2>
        <p>Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
      </section>
  )
}

export default PostPreview;
