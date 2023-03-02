import * as React from "react";
import { graphql, Link } from "gatsby";
import {BlogProps} from '../component/markdownProps';

const Blog: React.FC<BlogProps> = ({ data }) => {
  const blogs = data.allMarkdownRemark.nodes;

  return (
    <section>
      {blogs.map((blog) => (
        <div>
          <Link 
          to={`/blog/${blog.parent.name}`}
          ><h2>{blog.frontmatter.title}</h2></Link>
          <p>{blog.frontmatter.description}</p>
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
        }
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`

export default Blog;
