import React from "react";
import { BlogProps } from "../pages/blog/{MarkdownRemark.parent__(File)__name}";

const BlogComponent: React.FC<BlogProps> = (props) => {
  const html = props.data.markdownRemark.html

  return (
    <div dangerouslySetInnerHTML={{__html: html}}></div>
  );
};

export default BlogComponent;
