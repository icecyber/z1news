import client from '../../lib/apollo';
import { GET_CATEGORY_POSTS } from '../../queries/service/GET_PROJECTS_PAGE';

const CategoryPages = ({ data }: any) => {
  console.log(data);

  return <div>id</div>;
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
  console.log(params.category_name);
  const { data } = await client.query({
    query: GET_CATEGORY_POSTS,
    variables: {
      category: params.category_name,
    },
  });
  console.log(data);

  return {
    // Passed to the page component as props
    props: { data },
  };
}
