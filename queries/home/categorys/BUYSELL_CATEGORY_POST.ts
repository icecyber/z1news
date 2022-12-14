export const BUYSELL_CATEGORY_POST = `
BuySellCategoryPost: posts(where: {categoryName: "buysell"}, first: 5) {
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
  }
`;
