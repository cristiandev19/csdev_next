import React from 'react';
import { NextPage } from 'next';
import HomeLayout from 'modules/home/layout';
import { withTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = () => <HomeLayout />;

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default withTranslation()(Home);
