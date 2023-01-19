import { gql } from '@apollo/client';
import { GET_LAYOUT } from '../general_data/GET_LAYOUT';
import { CATEGORY_PAGE_TOP_BANNER } from '../home/categorys/CATEGORY_PAGE_TOP_BANNER';

export const GET_CATEGORY_POSTS = gql`
  query ProjectPage($category: String) {
    CategoryPosts: posts(where: { categoryName: $category }) {
      edges {
        node {
          id
          databaseId
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
    ${CATEGORY_PAGE_TOP_BANNER}
   
  }
  
`;
