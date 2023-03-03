import * as React from "react";
import { graphql, Link } from "gatsby";
import { markdownProps } from "../component/markdownProps";
import "../styles/gist_style.scss";

const Gists: React.FC<markdownProps> = ({ data }) => {
  const gists = data.allMarkdownRemark.nodes;

  return (
    <section className="container gists-container">
      {gists.map((gist) => (
        <div className="gist-card">
          <small className="badge">{gist.frontmatter.type}</small>
          <h2>{gist.frontmatter.title} </h2>
          <p>
            {gist.frontmatter.description}{" "}
            <Link className="link" to={`/gist/${gist.parent.name}`}>
              Read ➙
            </Link>
          </p>
        </div>
      ))}
    </section>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date
          description
          title
          type
        }
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`;

export default Gists;