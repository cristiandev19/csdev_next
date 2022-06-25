import clsx from 'clsx';
import React, { FunctionComponent, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  mode?: ContainerModes;
};

type ContainerModes = 'normal' | 'plain';

const Container: FunctionComponent<ContainerProps> = ({
  children,
  className = '',
  mode = 'normal',
}) => {
  return (
    <div
      className={clsx(
        mode === 'normal' && 'container mx-auto',
        'sm:px-0 px-8',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
