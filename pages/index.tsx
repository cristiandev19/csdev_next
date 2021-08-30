import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MainSection from '../components/ui/organisms/MainSection/MainSection';
import SkillSection from '../components/ui/organisms/SkillSection/SkillSection';
import TrophySection from '../components/ui/organisms/TrophySection/TrophySection';
import MilestoneSection from '../components/ui/organisms/MilestoneSection/MilestoneSection';

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Cristian Sotomayor</title>
      <meta name="description" content="Personal web made with next" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>

      <MainSection />

      <SkillSection />

      <TrophySection />

      <MilestoneSection />

    </main>
  </div>
);

export default Home;
