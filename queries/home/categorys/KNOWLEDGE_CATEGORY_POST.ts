export const KNOWLEDGE_CATEGORY_POST = `
KnowLedgeCategoryPost: posts(where: {categoryName: "ចំណេះដឹងទូទៅ"}, first: 5) {
    edges {
      node {
        id
        title
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
