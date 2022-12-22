import { gql } from '@apollo/client';

export const GET_CATEGORY_POSTS = gql`
  query ProjectPage($category: String) {
    CategoryPosts: posts(where: { categoryName: $category }) {
      edges {
        node {
          id
          title
          content
          date
          uri
          author {
            node {
              id
              name
            }
          }
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
  }
`;
