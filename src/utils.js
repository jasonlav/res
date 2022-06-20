export function routePath(content) {
  if(content && content.internal && content.internal.type) {
    switch(content.internal.type) {
      case "ContentfulPost":
        return `posts/${content.slug}`;
        break;
    }
  }
}