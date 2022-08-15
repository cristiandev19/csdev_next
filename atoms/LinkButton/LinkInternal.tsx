import { BASE_STYLES } from '@atoms/LinkButton/LinkButton.constants';
import { LinkBaseProps } from '@atoms/LinkButton/LinkButton.types';
import clsx from 'clsx';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import styles from './LinkButton.module.css';

const LinkInternal: FunctionComponent<LinkBaseProps> = ({
  href = '',
  children,
  className = '',
}) => {
  const baseStyles = BASE_STYLES;
  return (
    <Link href={href}>
      <a className={clsx(baseStyles, styles.gradient1, className)}>
        {children}
      </a>
    </Link>
  );
};

export default LinkInternal;
