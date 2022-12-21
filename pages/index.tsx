import client from '../lib/apollo';

import { GET_HOMEPAGE } from '../queries/service/GET_HOMEPAGE';
import { cleanGraphQLResponse } from '../utils/clean-graphql-response';

const Home = ({ data }: any) => {
  const DATA = JSON.stringify(cleanGraphQLResponse(data), null, 4);

  console.log(cleanGraphQLResponse(data));

  return (
    <>
      <pre>{DATA}</pre>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_HOMEPAGE,
  });

  return {
    props: {
      data,
    },
  };
}
