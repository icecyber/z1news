import Head from 'next/head';
import React from 'react';
import TopNav_Comp from './home/TopNav_Comp';

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Z1 News</title>
        <meta
          name="description"
          content="DiPMarts, E-Commerce Marketplace Platform, is a top phone E-Marketplace that offers a 360-degree service for mobile Phone online shopping via the website or mobile app to customers and our partners. Furthermore, our platform accepts online payments, allows for installment payments, and provides a quick delivery service."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen-xl mx-auto">
        <TopNav_Comp />
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
};

export default Layout;
