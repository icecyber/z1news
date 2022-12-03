import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { GET_HOMEPAGE } from '../queries/service/GET_HOMEPAGE';

const Home = () => {
  const data = useQuery(GET_HOMEPAGE);

  const socialMedia = data?.data?.SocialMedia.children.nodes;
  const contact = data?.data?.ContactInfo.children.nodes;

  return (
    <Layout socialmedia={socialMedia} contact={contact}>
      <div>main</div>
    </Layout>
  );
};

export default Home;
