export const FLAG = `
Flag : page(id: "language", idType: URI) {
    id
    title
    children {
      edges {
        node {
          id
          ... on Page{
            id
            title
            featuredImage {
              node {
                id
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;
