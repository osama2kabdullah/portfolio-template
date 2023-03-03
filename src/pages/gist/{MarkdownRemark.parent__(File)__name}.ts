import { graphql } from "gatsby";
import React from "react";
import GistComponent from "../../component/GistComponent";
import { markdownProps } from "../../component/markdownProps";

const GistPage: React.FC<markdownProps> = (props) => {
  return React.createElement(
    "div",
    null,
    React.createElement(GistComponent, { ...props })
  );
};

// bellow this is graphQL query for fetch html data
export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date
        title
        thumb {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
            )
          }
        }
      }
      id
      html
    }
  }
`;
export default GistPage;
