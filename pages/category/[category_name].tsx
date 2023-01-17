import { useQuery } from '@apollo/client';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CategoryPost_Comp from '../../components/category/CategoryPost_Comp';
import TopBannerSlide from '../../components/category/TopBannerSlide';
import NewsCategoryPageTitle from '../../components/home/category/NewsCategoryPageTitle';
import NewsCategoryTitle from '../../components/home/category/NewsCategoryTitle';
import Layout from '../../components/Layout';
import SidebarComp from '../../components/sidebar/SidebarComp';
import client from '../../lib/apollo';
import { GET_CATEGORY_POSTS } from '../../queries/service/GET_CATEGORY_PAGE';
import { GET_HOMEPAGE } from '../../queries/service/GET_HOMEPAGE';
import { cleanGraphQLResponse } from '../../utils/clean-graphql-response';

const CategoryPages = ({ data }: any) => {
  const Route = useRouter().query;
  const [routeTitle, setRouteTitle] = useState('');
  const CategoryData = cleanGraphQLResponse(data);
  const HomePage = useQuery(GET_HOMEPAGE);
  const DATA = cleanGraphQLResponse(HomePage?.data);
  console.log(
    '🚀 ~ file: [category_name].tsx:11 ~ CategoryPages ~ CategoryData',
    CategoryData
  );
  useEffect(() => {
    if (Route.category_name === 'projects') {
      setRouteTitle('គំរោងវិនិយោគ');
    } else if (Route.category_name === 'lifestyle') {
      setRouteTitle('បែបផែនជីវិត');
    } else if (Route.category_name === 'knowledge') {
      setRouteTitle('ចំណេះដឹងទូទៅ');
    } else if (Route.category_name === 'economic') {
      setRouteTitle('សេដ្ថកិច្ច');
    } else if (Route.category_name === 'buysell') {
      setRouteTitle('ទិញលក់');
    }
  }, []);

  if (!DATA) {
    return <h1>Loading..!</h1>;
  } else
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
        <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-12">
          {/* Main */}
          <div className="lg:col-span-8 py-3 px-3">
            <TopBannerSlide TopAds={CategoryData.TOPCategoryPageBanner} />
            <NewsCategoryPageTitle
              title={routeTitle}
              categorylink={CategoryData.CategoryPosts.length}
            />
            <CategoryPost_Comp news={CategoryData.CategoryPosts} />
            <TopBannerSlide TopAds={CategoryData.TOPCategoryPageBanner} />
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

export default CategoryPages;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category_name: 'projects' } },
      { params: { category_name: 'lifestyle' } },
      { params: { category_name: 'knowledge' } },
      { params: { category_name: 'economic' } },
      { params: { category_name: 'buysell' } },
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
