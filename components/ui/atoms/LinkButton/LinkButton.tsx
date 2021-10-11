import React, { FunctionComponent } from 'react';

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
};

const LinkButton: FunctionComponent<LinkButtonProps> = ({ href, children }) => (
  <>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        background: 'linear-gradient(55.58deg, #FF338F 9.41%, #F6AE13 87.82%)',
      }}
      className="flex justify-center py-3 my-3 text-cs-white rounded-xl text-xl"
    >
      {children}
    </a>
  </>
);

export default LinkButton;
