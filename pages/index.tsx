import { useQuery } from '@apollo/client';
import Image from 'next/image';
import Link from 'next/link';
import NewsCategoryComp from '../components/home/category/NewsCategoryComp';
import Layout from '../components/Layout';
import SidebarComp from '../components/sidebar/SidebarComp';
import client from '../lib/apollo';
import { GET_SEARCH } from '../queries/general_data/GET_SEARCH';

import { GET_HOMEPAGE } from '../queries/service/GET_HOMEPAGE';
import { cleanGraphQLResponse } from '../utils/clean-graphql-response';

const Home = ({ data, loading }: any) => {
  const DATA = cleanGraphQLResponse(data);

  const SearchDATA = useQuery(GET_SEARCH, { variables: { title: 'ខ' } });
  const cleanSearchData = cleanGraphQLResponse(SearchDATA.data);
  console.log(DATA);

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
        bottombanner={DATA.BottomBanner}
        topbanner={DATA.TopBanner}
        lastnewbanner={DATA.LastNewAds}
      >
        <div className="container mx-auto px-3 grid grid-cols-1 lg:grid-cols-12">
          {/* Main */}
          <div className="lg:col-span-8 py-3 px-3">
            {/* News Category Comp */}
            {/* Real Estate News Category Comp */}
            <NewsCategoryComp banner={DATA.CategoryBanner} />
          </div>
          {/* Sidebar */}
          <div className="lg:col-span-4 px-3">
            <SidebarComp
              popularnews={DATA.LastPost}
              video={DATA.SidebarVideo}
              sponsor={DATA.SPONSOR}
              ads={DATA.SidebarAds}
              lastnews={DATA.LastPost}
            />
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

  return {
    props: {
      data,
      loading,
    },
  };
}
