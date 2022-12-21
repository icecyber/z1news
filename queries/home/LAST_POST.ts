export const LAST_POST = `
LastPost: posts(last: 5) {
  edges {
    node {
      id
      title
      date
      tags {
        edges {
          node {
            id
            name
          }
        }
      }
      featuredImage {
        node {
          id
        }
      }
    }
  }
}
`;