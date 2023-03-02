export interface BlogProps {
  data: {
    markdownRemark: {
      frontmatter: {
        date: string;
        title: string;
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
        };
        parent: {
          name: string
        }
      }[];
    };
  };
}
