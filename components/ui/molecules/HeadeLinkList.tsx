import clsx from 'clsx';
import { NavigationItem } from 'helpers/interfaces/utils.interfaces';
import useOnScroll from 'hooks/useOnScroll';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, VoidFunctionComponent } from 'react';

const HeadeLinkList: VoidFunctionComponent = () => {
  const { t } = useTranslation();
  const { locale, asPath } = useRouter();
  const gradient = useOnScroll();

  const [navigationUrls] = useState<NavigationItem[]>([
    {
      path: '/',
      name: t('link.home'),
      active: false,
    },
    {
      path: '/contact',
      name: t('link.contact'),
      active: false,
    },
  ]);

  return (
    <>
      <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
        {navigationUrls.map((item, idx) => (
          <li className="mr-3 " key={idx}>
            <Link href={`${locale && '/' + locale}${item.path}`}>
              <a
                className={clsx(
                  'inline-block',
                  item.path === asPath && 'text-cs-white',
                  item.path === asPath && 'gradient-1',
                  'dark:text-cs-white',
                  'no-underline',
                  gradient === 100 ? 'text-cs-white' : 'text-gray-600',
                  'rounded-full',
                  'py-2',
                  'px-4',
                )}
              >
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HeadeLinkList;
