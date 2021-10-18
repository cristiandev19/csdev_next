import React, { VoidFunctionComponent } from 'react';
import HeaderSection from 'components/ui/organisms/HeaderSection/HeaderSection';
import PageTemplate from 'components/ui/templates/PageTemplate';
import ShortInformation from 'modules/home/sections/ShortInformation';
import TrophySection from 'modules/home/sections/TrophySection';
import MainSection from 'modules/home/sections/MainSection';
import TechnologiesSection from 'modules/home/sections/TechnologiesSection';
import ShortExperienceSection from 'modules/home/sections/ShortExperienceSection';

const HomeLayout: VoidFunctionComponent = () => {
  return (
    <PageTemplate title="Inicio | Cristian Sotomayor">
      <HeaderSection />

      <div className="pt-40 md:pt-0">
        <MainSection />

        <ShortInformation />

        <ShortExperienceSection />

        <TechnologiesSection />

        <TrophySection />
      </div>
    </PageTemplate>
  );
};

export default HomeLayout;
