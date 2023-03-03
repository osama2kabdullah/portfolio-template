import { IGatsbyImageData } from "gatsby-plugin-image";

export interface markdownProps {
  data: {
    markdownRemark: {
      frontmatter: {
        date: string;
        title: string;
        thumb: IGatsbyImageData
      };
      html: string;
      id: string;
    };
    allMarkdownRemark: {
      nodes: {
        frontmatter: {
          date: string;
          description: string;
          title: string;
          type: string;
        };
        parent: {
          name: string
        }
      }[];
    };
  };
}
