export const REALESTATE_CATEGORY_POST = `
RealEstateCategoryPost: posts(where: {categoryName: "អចលនទ្រព្យ"}, first: 5) {
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
