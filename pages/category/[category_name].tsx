import client from '../../lib/apollo';
import { GET_CATEGORY_POSTS } from '../../queries/service/GET_CATEGORY_PAGE';
import { cleanGraphQLResponse } from '../../utils/clean-graphql-response';

const CategoryPages = ({ data }: any) => {
  const DATA = JSON.stringify(cleanGraphQLResponse(data), null, 4);

  return <pre>{DATA}</pre>;
};

export default CategoryPages;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category_name: 'projects' } },
      { params: { category_name: 'lifestyle' } },
      { params: { category_name: 'knowledge' } },
    ],
    fallback: 'blocking', // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params }: any) {
  const { data } = await client.query({
    query: GET_CATEGORY_POSTS,
    variables: {
      category: params.category_name,
    },
  });

  return {
    // Passed to the page component as props
    props: { data },
  };
}
