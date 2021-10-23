import clsx from 'clsx';
import useOnScroll from 'hooks/useOnScroll';
import React, { FunctionComponent } from 'react';

type NavigationProps = {
  children: React.ReactNode;
};

const Navigation: FunctionComponent<NavigationProps> = ({ children }) => {
  const gradient = useOnScroll();

  return (
    <nav
      className={clsx(
        'dark:bg-cs-hard-black',
        'p-2',
        'md:p-4',
        'mt-0',
        'fixed',
        gradient == 100 ? 'bg-cs-hard-black' : 'bg-white',
        'w-full',
        'top-0',
      )}
      style={{
        zIndex: 20,
      }}
    >
      {children}
    </nav>
  );
};

export default Navigation;
