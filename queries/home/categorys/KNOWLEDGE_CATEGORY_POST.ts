export const KNOWLEDGE_CATEGORY_POST = `
KnowLedgeCategoryPost: posts(where: {categoryName: "knowledge"}, first: 5) {
    edges {
      node {
        id
        title
        databaseId
        content
        date
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
  }`;
