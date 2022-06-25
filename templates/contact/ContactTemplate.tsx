import HeaderSection from 'organisms/HeaderSection/HeaderSection';
import SocialSection from 'organisms/SocialSection/SocialSection';
import PageTemplate from 'templates/base/PageTemplate';
import React, { VoidFunctionComponent } from 'react';

const ContactTemplate: VoidFunctionComponent = () => {
  return (
    <PageTemplate title="Contact | Cristian Sotomayor">
      <HeaderSection />

      <div className="container mx-auto sm:px-0 px-8 pb-40 pt-40">
        <SocialSection />
      </div>
    </PageTemplate>
  );
};

export default ContactTemplate;
