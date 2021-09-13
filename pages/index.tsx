import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import MainSection from '../components/ui/organisms/MainSection/MainSection';
import SkillSection from '../components/ui/organisms/SkillSection/SkillSection';
import TrophySection from '../components/ui/organisms/TrophySection/TrophySection';
import MilestoneSection from '../components/ui/organisms/MilestoneSection/MilestoneSection';
import useWindowSize, { WidthSizesProps } from '../hooks/useWindowSize';
import HeaderSection from '../components/ui/organisms/HeaderSection/HeaderSection';

const addToolBar: WidthSizesProps<boolean> = {
  extrasmall: true,
  small: true,
  medium: true,
  large: true,
  extralarge: false,
};

const Home = () => {
  const [showToolbar, setShowToolbar] = useState(true);

  const [size, widthStates] = useWindowSize();

  useEffect(() => {
    setShowToolbar(addToolBar[widthStates]);
  }, [size]);

  return (
    <div>
      <Head>
        <title>Cristian Sotomayor</title>
        <meta name="description" content="Personal web made with next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderSection />

      <div className="container mx-auto sm:px-0 px-8">
        <MainSection />

        <SkillSection />

        <TrophySection />

        <MilestoneSection />
      </div>
    </div>
  );
};

export default Home;
