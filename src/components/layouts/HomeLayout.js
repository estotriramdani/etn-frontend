import Head from 'next/head';
import React from 'react';
import Gap from '../atoms/gap';
import { Navbar, Footer, CategoryList, RecentNews } from '../moleculs';

const HomeLayout = ({ children, title, ...rest }) => {
  return (
    <div className="home-container">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
        />
      </Head>
      <Navbar />
      <Gap height={65} />
      <div className="content">
        <CategoryList />
        <main className="main">{children}</main>
        <RecentNews />
      </div>
      <Gap height={25} />
      <Footer />
    </div>
  );
};

export default HomeLayout;