export const LAST_POST = `
LastPost: posts(last: 5) {
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
