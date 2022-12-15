export const LAST_POST = `
LastPost: posts(last: 6) {
    edges {
      node {
        id
        title
        tags {
          edges {
            node {
              id
              name
              uri
            }
          }
        }
        featuredImage {
          node {
            id
            altText
            sourceUrl
          }
        }
      }
    }
  }
`;
