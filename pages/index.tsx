import { useQuery } from '@apollo/client';
import Layout from '../components/Layout';
import SidebarComp from '../components/sidebar/SidebarComp';
import client from '../lib/apollo';
import { GET_SEARCH } from '../queries/general_data/GET_SEARCH';

import { GET_HOMEPAGE } from '../queries/service/GET_HOMEPAGE';
import { cleanGraphQLResponse } from '../utils/clean-graphql-response';

const Home = ({ data, loading }: any) => {
  const DATA = cleanGraphQLResponse(data);
  console.log(DATA);

  const SearchDATA = useQuery(GET_SEARCH, { variables: { title: 'ខ' } });
  const cleanSearchData = cleanGraphQLResponse(SearchDATA.data);

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
        menu={DATA.menuItems}
        lastposts={DATA.LastPost}
        footerbg={DATA.FooterBG}
        about={DATA.AboutZ1News}
      >
        <div className="container mx-auto px-3 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">hi</div>
          <div className="lg:col-span-4">
            <SidebarComp />
          </div>
        </div>
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
