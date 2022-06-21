import clsx from 'clsx';
import React, { FunctionComponent } from 'react';
import Link from 'next/link';

type LinkButtonProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
  type?: LinkType;
};

type LinkType = 'internal' | 'external';

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
                'gradient-1',
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
              'gradient-1',
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
