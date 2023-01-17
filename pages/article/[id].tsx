import { gql, useQuery } from '@apollo/client';
import moment from 'moment';
import React from 'react';
import TopBannerSlide from '../../components/category/TopBannerSlide';
import Layout from '../../components/Layout';
import SidebarComp from '../../components/sidebar/SidebarComp';
import client from '../../lib/apollo';
import { GET_DETAIL_PAGE } from '../../queries/service/GET_DETAIL_PAGE';
import { GET_HOMEPAGE } from '../../queries/service/GET_HOMEPAGE';
import { cleanGraphQLResponse } from '../../utils/clean-graphql-response';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookMessengerShareButton,
  TelegramShareButton,
  LineShareButton,
  FacebookIcon,
} from 'react-share';
import { useRouter } from 'next/router';

const PostDetail = ({ data }: any) => {
  const GetPostData = cleanGraphQLResponse(data);
  console.log('🚀 ~ file: [id].tsx:12 ~ PostDetail ~ GetPostData', GetPostData);
  const HomePage = useQuery(GET_HOMEPAGE);
  const DATA = cleanGraphQLResponse(HomePage?.data);

  if (!DATA) {
    return <div>Loading...</div>;
  } else {
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
            <TopBannerSlide TopAds={GetPostData.DetailBanner} />
            {/* Post Content */}
            <div>
              {/* PostDetail Header */}
              <div className="py-4">
                {/* Title */}
                <h1 className="koulen text-[24px] ">
                  {GetPostData.PostDetail.title}
                </h1>
                {/* Author and Time */}
                <div className="mt-1  items-center">
                  <div className="flex  gap-2">
                    <div className="text-[#aaa] text-sm battambang">
                      <i className="fa-regular fa-user mr-1"></i>
                      {GetPostData.PostDetail.author.name}
                    </div>
                    <div className="text-[#aaa] text-sm battambang">
                      <i className="fa-solid fa-calendar-days mr-1"></i>
                      {moment(GetPostData.PostDetail.date).format(
                        'D/MM/YYYY HH:MM'
                      )}
                    </div>
                  </div>
                  {/* Share To */}
                  <div>
                    <span className="text-[#aaa] text-sm battambang">
                      ចែករំលែក
                      <FacebookShareButton
                        url={window.location.href}
                        quote={''}
                        className=""
                      >
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>
                    </span>
                  </div>
                </div>
              </div>
            </div>
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
