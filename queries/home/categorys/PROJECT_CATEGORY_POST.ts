export const PROJECT_CATEGORY_POST = `
ProjectCategoryPost: posts(where: {categoryName: "projects"}, first: 5) {
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
