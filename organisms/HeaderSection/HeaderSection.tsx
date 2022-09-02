import clsx from 'clsx';
import React, {
  useContext,
  useEffect,
  useState,
  VoidFunctionComponent,
} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeContext from '@contexts/theme/theme.context';
import { ThemeActionTypes } from '@contexts/theme/theme.reducer';
import useOnScroll from '@shared/hooks/useOnScroll';
import { LANGUAGES } from '@organisms/HeaderSection/Header.constants';
import Navigation from '@atoms/Navigation';
import ThemeToggler from '@molecules/ThemeToggler';
import ProgressGradient from '@atoms/ProgressGradient';
import HeaderLinkList from '@molecules/HeaderLinkList';

const HeaderSection: VoidFunctionComponent = () => {
  const router = useRouter();
  const { themeState, themeDispatch } = useContext(ThemeContext);
  const [checked, setChecked] = useState(themeState?.theme === 'dark');
  const gradient = useOnScroll();

  useEffect(() => {
    if (themeState) {
      setChecked(themeState?.theme === 'dark');
    }
  }, [themeState]);

  const handleChange = () => {
    themeDispatch({ type: ThemeActionTypes.changeTheme, payload: null });
    setChecked(!checked);
  };

  return (
    <Navigation>
      <div className="container mx-auto flex flex-wrap items-center mb-4 md:mb-0">
        <div className="flex w-full md:w-1/3 justify-center md:justify-start text-white font-extrabold">
          <Link href="/">
            <a className="text-white no-underline hover:text-white hover:no-underline">
              <span
                className={clsx(
                  'hidden',
                  'lg:block',
                  gradient === 100 ? 'text-cs-white' : 'text-cs-black',
                  'dark:text-cs-white',
                  'text-2xl',
                  'pl-2',
                )}
              >
                &#60;Cristian Sotomayor /&#62;
              </span>
              <span
                className={clsx(
                  'block',
                  'lg:hidden',
                  gradient === 100 ? 'text-cs-white' : 'text-cs-black',
                  'dark:text-cs-white',
                  'text-2xl',
                  'pl-2',
                )}
              >
                &#60;Cristian /&#62;
              </span>
            </a>
          </Link>
        </div>
        <div className="flex w-full content-center justify-between md:w-1/3 md:justify-center">
          <ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
            <li className="mr-3">
              <ThemeToggler checked={checked} onChange={handleChange} />
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
                    router.locale == 'en'
                      ? 'border-cs-blue text-cs-blue'
                      : 'border-red-500 text-red-500',
                  )}
                >
                  {LANGUAGES[router.locale].nativeName}
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex w-full content-center justify-between md:w-1/3 md:justify-end">
          <HeaderLinkList />
        </div>
      </div>
      <ProgressGradient gradient={gradient} />
    </Navigation>
  );
};

export default HeaderSection;
