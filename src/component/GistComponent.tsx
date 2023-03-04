import { Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { markdownProps } from "./markdownProps";

const GistComponent: React.FC<markdownProps> = (props) => {
  const html = props.data.markdownRemark.html;
  const { title, date, thumb } = props.data.markdownRemark.frontmatter;

  return (
    <>
      <div className="gist-main-title">
      <Link className="link-x-minus" to="/Gists"><span className="icon">↩</span> Back</Link>
        <h1>{title}</h1>
        <small>{new Date(date).toDateString()}</small>
        <br />
        <br />
        <GatsbyImage image={getImage(thumb)} alt={`dsds`} />
      </div>
      <div
        className="container"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </>
  );
};

export default GistComponent;
