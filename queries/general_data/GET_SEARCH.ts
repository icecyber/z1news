import { gql } from '@apollo/client';

export const GET_SEARCH = gql`
  query Search($title: String) {
    posts(where: { search: $title }) {
      edges {
        node {
          id
          title
          uri
          featuredImage {
            node {
              id
              altText
              sourceUrl
            }
          }
          content
          author {
            node {
              id
            }
          }
          date
        }
      }
    }
  }
`;
