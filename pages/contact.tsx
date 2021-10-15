import React, { VoidFunctionComponent } from 'react';
import HeaderSection from '../components/ui/organisms/HeaderSection/HeaderSection';
import SocialSection from '../components/ui/organisms/SocialSection/SocialSection';
import PageTemplate from '../components/ui/templates/PageTemplate';

const ContactPage: VoidFunctionComponent = () => (
  <PageTemplate title="Contacto | Cristian Sotomayor">
    <HeaderSection />

    <div className="container mx-auto sm:px-0 px-8 pb-40 pt-40">
      <SocialSection />
    </div>
  </PageTemplate>
);

export default ContactPage;
