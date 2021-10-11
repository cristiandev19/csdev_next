import React from 'react';
import MainSection from '../components/ui/organisms/MainSection/MainSection';
import SkillSection from '../components/ui/organisms/SkillSection/SkillSection';
import TrophySection from '../components/ui/organisms/TrophySection/TrophySection';
import HeaderSection from '../components/ui/organisms/HeaderSection/HeaderSection';
import PageTemplate from '../components/ui/templates/PageTemplate';

const Home = () => (
  <PageTemplate title="Inicio | Cristian Sotomayor">
    <HeaderSection />

    <div className="container mx-auto sm:px-0 px-8 pt-40 md:pt-0">
      <MainSection />

      <SkillSection />

      <TrophySection />

      {/* <MilestoneSection /> */}
    </div>
  </PageTemplate>
);

export default Home;
