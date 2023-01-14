export const LAST_POST = `
LastPost: posts(first: 5) {
  edges {
    node {
      id
      title
      date
      databaseId
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
          title
          altText
          sourceUrl
        }
      }
    }
  }
}
`;
