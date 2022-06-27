import React from 'react';
import { NextPage } from 'next';
import { withTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomeTemplate from '@templates/HomeTemplate';

const Home: NextPage = () => <HomeTemplate />;

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default withTranslation()(Home);
