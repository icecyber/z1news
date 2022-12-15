import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { GET_HOMEPAGE } from '../queries/service/GET_HOMEPAGE';

const Home = () => {
  const data = useQuery(GET_HOMEPAGE);

  // const socialMedia = data?.data?.SocialMedia.children.nodes;
  // const contact = data?.data?.ContactInfo.children.nodes;
  if (data) {
    console.log(data);
    return;
  }

  return (
    <Layout>
      <h1>hi</h1>
    </Layout>
  );
};

export default Home;
