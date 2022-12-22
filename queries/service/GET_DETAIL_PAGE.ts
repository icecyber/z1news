import { gql } from '@apollo/client';

export const GET_DETAIL_PAGE = gql`
  query PostDetail($id: String) {
    PostDetail: post(id: $id, idType: DATABASE_ID) {
      id
      title
      content
      categories {
        edges {
          node {
            id
            name
          }
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
      author {
        node {
          id
          name
        }
      }
      date
    }
  }
`;
