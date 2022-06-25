import React, { VoidFunctionComponent } from 'react';
import HeaderSection from 'organisms/HeaderSection/HeaderSection';
import ShortInformation from 'organisms/ShortInformation/ShortInformation';
import TrophySection from 'organisms/TrophySection/TrophySection';
import MainSection from 'organisms/MainSection/MainSection';
import TechnologiesSection from 'organisms/TechnologiesSection/TechnologiesSection';
import ShortExperienceSection from 'organisms/ShortExperienceSection/ShortExperienceSection';
import PageTemplate from 'templates/base/PageTemplate';

const HomeTemplate: VoidFunctionComponent = () => {
  return (
    <PageTemplate title="Home | Cristian Sotomayor">
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

export default HomeTemplate;
