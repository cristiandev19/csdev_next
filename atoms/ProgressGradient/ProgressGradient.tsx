import React, { VoidFunctionComponent } from 'react';
import useOnScroll from '@shared/hooks/useOnScroll';
import styles from './ProgressGradient.module.css';

const ProgressGradient: VoidFunctionComponent = () => {
  const gradient = useOnScroll();

  return (
    <>
      <div
        className={`${styles.gradient1} absolute gradient-1 h-4 md:h-1.5 -bottom-4	md:bottom-0 rounded-r-lg`}
        style={{
          left: 0,
          width: `${gradient}%`,
        }}
      ></div>
    </>
  );
};

export default ProgressGradient;
