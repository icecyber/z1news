import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import client from '../lib/apollo';

import { GET_HOMEPAGE } from '../queries/service/GET_HOMEPAGE';

const Home = ({ data }: any) => {
  // const socialMedia = data?.data?.SocialMedia.children.nodes;
  // const contact = data?.data?.ContactInfo.children.nodes;
  const DATA = data.SocialMedia;
  const DataConvert = JSON.stringify(DATA);

  return (
    <Layout>
      <p>{DataConvert}</p>
    </Layout>
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
