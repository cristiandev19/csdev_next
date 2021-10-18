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
            style={{
              background:
                'linear-gradient(55.58deg, #FF338F 9.41%, #F6AE13 87.82%)',
            }}
            className={clsx(
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
