import { gql } from '@apollo/client';
import React from 'react';
import client from '../../lib/apollo';
import { GET_DETAIL_PAGE } from '../../queries/service/GET_DETAIL_PAGE';
import { cleanGraphQLResponse } from '../../utils/clean-graphql-response';

const PostDetail = ({ data }: any) => {
  const getData = JSON.stringify(cleanGraphQLResponse(data), null, 4);

  return <pre>{getData}</pre>;
};

export default PostDetail;

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query MyQuery2 {
        posts {
          nodes {
            databaseId
          }
        }
      }
    `,
  });

  return {
    paths: data.posts.nodes.map((post: any) => ({
      params: { id: post.databaseId.toString() },
    })),
    fallback: 'blocking', // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }: any) {
  const { data } = await client.query({
    query: GET_DETAIL_PAGE,
    variables: {
      id: params?.id,
    },
  });

  return {
    // Passed to the page component as props
    props: {
      data,
    },
  };
}
