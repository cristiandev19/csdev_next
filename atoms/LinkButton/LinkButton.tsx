import clsx from 'clsx';
import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import styles from './LinkButton.module.css';
import { LinkButtonProps } from './LinkButton.types';

const LinkButton: FunctionComponent<LinkButtonProps> = ({
  href = '',
  children,
  className = '',
  type = 'internal',
}) => (
  <>
    {
      {
        internal: (
          <Link href={href}>
            <a
              className={clsx(
                'transition duration-300 ease-in-out hover:scale-105',
                'flex',
                'justify-center',
                'py-3',
                'my-3',
                'text-cs-white',
                'rounded-xl',
                'text-xl',
                styles.gradient1,
                className,
              )}
            >
              {children}
            </a>
          </Link>
        ),
        external: (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={clsx(
              'transition duration-300 ease-in-out hover:scale-105',
              // 'gradient-1',
              styles.gradient1,
              'flex',
              'justify-center',
              'py-3',
              'my-3',
              'text-cs-white',
              'rounded-xl',
              'text-xl',
              'word-break',
              className,
            )}
          >
            {children}
          </a>
        ),
      }[type]
    }
  </>
);

export default LinkButton;
