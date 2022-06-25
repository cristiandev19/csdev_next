import React, { VoidFunctionComponent } from 'react';
import TrophyResponsive from 'molecules/TrophyResponsive/TrophyResponsive';

const TrophySection: VoidFunctionComponent = () => (
  <section className="py-12">
    <h2 className="text-center text-2xl my-8">Github</h2>

    <div className="w-11/12 m-auto">
      <TrophyResponsive />
    </div>
  </section>
);

export default TrophySection;
