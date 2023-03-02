export interface markdownProps {
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
          type: string;
        };
        parent: {
          name: string
        }
      }[];
    };
  };
}
