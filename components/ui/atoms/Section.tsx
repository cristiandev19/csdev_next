import clsx from 'clsx';
import React, { FunctionComponent, ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  className?: string;
};

const Section: FunctionComponent<SectionProps> = ({ children, className }) => {
  return <section className={className}>{children}</section>;
};

export default Section;
