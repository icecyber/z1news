import { gql, useLazyQuery, useQuery } from '@apollo/client';
import Router, { useRouter } from 'next/router';
import React from 'react';
import CategoryPost_Comp from '../../components/category/CategoryPost_Comp';
import TopBannerSlide from '../../components/category/TopBannerSlide';
import Layout from '../../components/Layout';
import SidebarComp from '../../components/sidebar/SidebarComp';
import client from '../../lib/apollo';
import { GET_SEARCH } from '../../queries/general_data/GET_SEARCH';
import { cleanGraphQLResponse } from '../../utils/clean-graphql-response';

const Search = ({ data }: any) => {
  const DATASEARCH = data.posts.edges.length;

  const DATA = cleanGraphQLResponse(data);
  const Route = useRouter().query.search;

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
          <TopBannerSlide TopAds={DATA.TOPCategoryPageBanner} />

          {DATASEARCH > 0 ? (
            <div>
              <h1 className="py-5 text-2xl koulen">ស្វែងរក៖ {Route}</h1>
              <CategoryPost_Comp news={DATA.posts} />
            </div>
          ) : (
            <div className="py-5 text-2xl koulen">ស្វែងរក {Route} មិនឃើញទេ</div>
          )}
          <TopBannerSlide TopAds={DATA.TOPCategoryPageBanner} />
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
};

export default Search;

export async function getServerSideProps({ params }: any) {
  console.log(params, 'param');

  const { data } = await client.query({
    query: GET_SEARCH,
    variables: {
      title: params.search,
    },
  });

  return {
    props: { data },
  };
}
