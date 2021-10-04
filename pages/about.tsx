import React from 'react';
import HeaderSection from '../components/ui/organisms/HeaderSection/HeaderSection';
import PageTemplate from '../components/ui/templates/PageTemplate';

const Aboutme = () => (
  <PageTemplate title="Acerca de mi | Cristian Sotomayor">
    <HeaderSection />

    <div className="container mx-auto sm:px-0 px-8">
      <h1>
        ACERCA DE MI
      </h1>
    </div>
  </PageTemplate>
);

export default Aboutme;
