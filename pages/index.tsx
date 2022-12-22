import Layout from '../components/Layout';
import client from '../lib/apollo';

import { GET_HOMEPAGE } from '../queries/service/GET_HOMEPAGE';
import { cleanGraphQLResponse } from '../utils/clean-graphql-response';

const Home = ({ data }: any) => {
  const DATA = JSON.stringify(cleanGraphQLResponse(data), null, 4);

  return (
    <Layout>
      <pre>{DATA}</pre>
    </Layout>
  );
};

export default Home;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_HOMEPAGE,
  });
  console.log(data);

  return {
    props: {
      data,
    },
  };
}
