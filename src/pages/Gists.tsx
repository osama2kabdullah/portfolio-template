import * as React from "react";
import { graphql, Link } from "gatsby";
import { markdownProps } from "../component/markdownProps";
import "../styles/gist_style.scss";

const Gists: React.FC<markdownProps> = ({ data }) => {
  const gists = data.allMarkdownRemark.nodes;

  return (
    <section className="container gists-container">
    <Link className="link-x-minus" to="/"><span className="icon">↩</span> About page</Link>
      <h1 style={{textAlign: 'center'}}>Descover my gists</h1>
      {gists.map((gist) => (
        <div className="gist-card">
          <small className="badge">{gist.frontmatter.type}</small>
          <h2>{gist.frontmatter.title} </h2>
          <p>
            {gist.frontmatter.description}{" "}
            <Link className="link-x" to={`/gist/${gist.parent.name}`}>
              Read <span className="icon">➙</span>
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

export const Head: HeadFC = () => <title>Gists - Abdullah</title>;
export default Gists;
