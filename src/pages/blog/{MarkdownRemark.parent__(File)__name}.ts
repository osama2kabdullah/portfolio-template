import { graphql } from 'gatsby';
import React from 'react';
import BlogComponent from '../../component/BlogComponent';
import { BlogProps } from "../../component/markdownProps";

const BlogPage: React.FC<BlogProps>= (props) => {
    return React.createElement('div', null, React.createElement(BlogComponent, {...props}));
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