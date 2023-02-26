import { graphql } from 'gatsby';
import React from 'react';

const BlogPage = (props:void) => {
    console.log(props) //recive blog html from markdown
    return ; //I want to write JSX here, But I cannot do it
};

// bellow this is graphQL query for fetch html data
export const query = graphql`
  query ($id: String) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        date
        title
      }
      id
      html
    }
  }
`
export default BlogPage;