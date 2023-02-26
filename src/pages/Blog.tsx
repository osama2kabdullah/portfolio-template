import * as React from "react";
import { graphql, Link } from "gatsby";

type BlogProps = {
  data: {
    allMarkdownRemark: {
      nodes: {
        frontmatter: {
          date: string;
          description: string;
          title: string;
        };
      }[];
    };
  };
};

const Blog: React.FC<BlogProps> = ({ data }) => {
  const blogs = data.allMarkdownRemark.nodes;

  return (
    <section>
      {blogs.map((blog) => (
        <div>
          <Link to={`/blog/${blog.frontmatter.title.toLowerCase().replace(/ /g, '-').replace("'", "-")}`}><h2>{blog.frontmatter.title}</h2></Link>
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
      }
    }
  }
`;

export default Blog;
