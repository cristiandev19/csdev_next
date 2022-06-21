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
                  'dark:text-cs-white',
                  'no-underline',
                  item.path === asPath
                    ? 'text-white bg-cs-rose'
                    : gradient === 100
                    ? 'text-white hover:text-cs-rose'
                    : 'text-gray-600 hover:text-cs-rose',
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
