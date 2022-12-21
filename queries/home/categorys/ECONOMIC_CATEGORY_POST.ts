export const ECONOMIC_CATEGORY_POST = `
EconomicCategoryPost: posts(where: {categoryName: "សេដ្ថកិច្ច"}, first: 5) {
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
