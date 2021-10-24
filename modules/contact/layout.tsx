import HeaderSection from 'components/ui/organisms/HeaderSection/HeaderSection';
import PageTemplate from 'components/ui/templates/PageTemplate';
import SocialSection from 'modules/contact/sections/SocialSection';
import React, { VoidFunctionComponent } from 'react';

const ContactLayout: VoidFunctionComponent = () => {
  return (
    <PageTemplate title="Contact | Cristian Sotomayor">
      <HeaderSection />

      <div className="container mx-auto sm:px-0 px-8 pb-40 pt-40">
        <SocialSection />
      </div>
    </PageTemplate>
  );
};

export default ContactLayout;
