import { Link } from "gatsby";
import React from "react";
import { BlogProps } from "../component/markdownProps";

const BlogComponent: React.FC<BlogProps> = (props) => {
  const html = props.data.markdownRemark.html;
  const { title, date } = props.data.markdownRemark.frontmatter;

  return (
    <>
      <Link to="/Blog">Back</Link>
      <h1>{title}</h1>
      <small>{new Date(date).toDateString()}</small>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  );
};

export default BlogComponent;
