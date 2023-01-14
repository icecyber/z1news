export const REALESTATE_CATEGORY_POST = `
RealEstateCategoryPost: posts(where: {categoryName: "realestate"}, first: 5) {
  edges {
    node {
      id
      databaseId
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
