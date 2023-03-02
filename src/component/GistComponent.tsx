import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { markdownProps } from "./markdownProps";

const GistComponent: React.FC<markdownProps> = (props) => {
  const html = props.data.markdownRemark.html;
  const { title, date } = props.data.markdownRemark.frontmatter; 
  
  return (
    <>
      <Link to="/Gists">↩ Back</Link>
      <h1>{title}</h1>
      <small>{new Date(date).toDateString()}</small>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  );
};

export default GistComponent;
