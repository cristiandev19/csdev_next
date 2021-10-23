import clsx from 'clsx';
import React, {
  useContext,
  useEffect,
  useState,
  VoidFunctionComponent,
} from 'react';
import { NavigationItem } from 'helpers/interfaces/utils.interfaces';
import { useRouter } from 'next/router';
import SunIcon from 'components/Icons/SunIcon';
import MoonIcon from 'components/Icons/MoonIcon';
import ThemeContext from 'contexts/theme/theme.context';
import { ThemeActionTypes } from 'contexts/theme/theme.reducer';
import { Browser } from 'helpers/types/browser.type';
import { checkBrowser } from 'helpers/functions/browser';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Español' },
};

const HeaderSection: VoidFunctionComponent = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const { themeState, themeDispatch } = useContext(ThemeContext);

  const [checked, setChecked] = useState(themeState?.theme === 'dark');

  useEffect(() => {
    if (themeState) {
      setChecked(themeState?.theme === 'dark');
    }
  }, [themeState]);

  const handleChange = () => {
    themeDispatch({ type: ThemeActionTypes.changeTheme, payload: null });
    setChecked(!checked);
  };

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

  const [browser, setBrowser] = useState<Browser>('NaB');

  useEffect(() => {
    if (window) {
      setBrowser(checkBrowser(window.navigator));
    }
  }, []);

  return (
    <nav
      className={clsx(
        'dark:bg-cs-hard-black',
        'p-2',
        'mt-0',
        'fixed',
        browser === 'Firefox' ? 'bg-white' : 'backdrop-blur',
        'w-full',
        'top-0',
      )}
      style={{
        zIndex: 20,
      }}
    >
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="flex w-full md:w-1/3 justify-center md:justify-start text-white font-extrabold">
          <Link href="/">
            <a className="text-white no-underline hover:text-white hover:no-underline">
              <span className="hidden lg:block text-cs-black dark:text-cs-white text-2xl pl-2">
                &#60;Cristian Sotomayor /&#62;
              </span>
              <span className="block lg:hidden text-cs-black dark:text-cs-white text-2xl pl-2">
                &#60;Cristian /&#62;
              </span>
            </a>
          </Link>
        </div>
        <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-center">
          <ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
            <li className="mr-3">
              <div className="flex items-center justify-center w-full">
                <div
                  className={clsx(
                    'mx-2',
                    !checked ? 'sun-light' : 'dark:text-cs-black',
                  )}
                >
                  <SunIcon />
                </div>
                <label
                  htmlFor="toggleB"
                  className="flex items-center cursor-pointer"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="toggleB"
                      className="sr-only"
                      checked={checked}
                      onChange={() => handleChange()}
                    />
                    <div className="container-dot block bg-gray-600 w-14 h-8 rounded-full" />
                    <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition" />
                  </div>
                </label>
                <div
                  className={clsx(
                    'mx-2',
                    checked ? 'moon-dark' : 'text-cs-white',
                  )}
                >
                  <MoonIcon />
                </div>
              </div>
            </li>
            <li className="mr-3">
              <Link
                href={`/${router.basePath}${
                  router.locale == 'en' ? 'es' : 'en'
                }${router.pathname}`}
                locale={router.locale == 'en' ? 'es' : 'en'}
              >
                <a
                  className={clsx(
                    'inline-block',
                    'no-underline',
                    'rounded-full',
                    'py-2',
                    'px-4',
                    'border-2',
                    router.locale == 'en' ? 'border-cs-blue' : 'border-red-500',
                    router.locale == 'en' ? 'text-cs-blue' : 'text-red-500',
                  )}
                >
                  {lngs[router.locale].nativeName}
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            {navigationUrls.map((item, idx) => (
              <li className="mr-3 " key={idx}>
                <Link
                  href={`${router.locale && '/' + router.locale}${item.path}`}
                >
                  <a
                    className={clsx(
                      'inline-block',
                      item.path === router.asPath
                        ? 'text-cs-white'
                        : 'text-gray-600',
                      'dark:text-cs-white',
                      'no-underline',
                      item.path === router.asPath && 'gradient-1',
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
        </div>
      </div>
    </nav>
  );
};

export default HeaderSection;
