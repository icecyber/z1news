import { useQuery } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { GET_LAYOUT } from '../queries/service/GET_LAYOUT';
import { cleanGraphQLResponse } from '../utils/clean-graphql-response';

const Layout = ({ children }: any) => {
  const { data, loading, error } = useQuery(GET_LAYOUT);
  const cleanData = cleanGraphQLResponse(data);
  console.log(cleanData);

  return (
    <>
      <Head>
        <title>Z1 News</title>
        <meta
          name="description"
          content="Z1 news is media website collect all real estate news in Cambodia."
        />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        />
      </Head>
      <div>
        <div className="bg-hightlightColor">
          <div className="w-full h-10 container mx-auto text-[#D4D2C9] flex flex-wrap justify-between">
            <div className="flex"></div>
            <div className="contact-info">
              <Link href="tel:+855963689777">ទូរស័ព្ទ: +855 96 3689 777</Link>
              <Link href="mailto:z1newsnetwork@gmail.com">
                អ៊ីមែល: z1newsnetwork@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <main className="max-w-screen-xl mx-auto">{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
};

export default Layout;
