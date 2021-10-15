import React from 'react';
import MainSection from '../components/ui/organisms/MainSection/MainSection';
import SkillSection from '../components/ui/organisms/SkillSection/SkillSection';
import TrophySection from '../components/ui/organisms/TrophySection/TrophySection';
import HeaderSection from '../components/ui/organisms/HeaderSection/HeaderSection';
import PageTemplate from '../components/ui/templates/PageTemplate';
import { NextPage } from 'next';
import ShortInformation from '../components/ui/organisms/ShortInformation';
// import PresentationSection from '../components/ui/organisms/PresentationSection';

const Home: NextPage = () => (
  <PageTemplate title="Inicio | Cristian Sotomayor">
    <HeaderSection />

    <div className="pt-40 md:pt-0">
      <MainSection />

      <ShortInformation />

      {/* <PresentationSection /> */}

      <SkillSection />

      <TrophySection />

      {/* <MilestoneSection /> */}
    </div>
  </PageTemplate>
);

export default Home;
