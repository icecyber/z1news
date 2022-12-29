import Layout from '../components/Layout';
import client from '../lib/apollo';

import { GET_HOMEPAGE } from '../queries/service/GET_HOMEPAGE';
import { cleanGraphQLResponse } from '../utils/clean-graphql-response';

const Home = ({ data, loading }: any) => {
  const DATA = cleanGraphQLResponse(data);
  console.log(loading, data);
  if (loading) {
    return <p>loading...</p>;
  } else if (DATA) {
    return (
      <Layout
        flag={DATA.Flag}
        socialmedia={DATA.SocialMedia}
        contactinfo={DATA.ContactInfo}
        logo={DATA.Z1Logo}
        logoads={DATA.TopBanner}
      >
        <pre>hi</pre>
      </Layout>
    );
  }
};

export default Home;

export async function getServerSideProps() {
  const { data, loading } = await client.query({
    query: GET_HOMEPAGE,
  });
  console.log(data);

  return {
    props: {
      data,
      loading,
    },
  };
}
