import clsx from 'clsx';
import React, {
  useContext,
  useEffect,
  useState,
  VoidFunctionComponent,
} from 'react';
import { useRouter } from 'next/router';
import ThemeContext from 'contexts/theme/theme.context';
import { ThemeActionTypes } from 'contexts/theme/theme.reducer';
import Link from 'next/link';
import ThemeToggle from 'components/ui/molecules/ThemeToggle';
import HeadeLinkList from 'components/ui/molecules/HeadeLinkList';
import Navigation from 'components/ui/atoms/Navigation';
import useOnScroll from 'hooks/useOnScroll';

const lngs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Español' },
};

const HeaderSection: VoidFunctionComponent = () => {
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

  const gradient = useOnScroll();

  return (
    <Navigation>
      <div className="container mx-auto flex flex-wrap items-center">
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
        <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-center">
          <ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
            <li className="mr-3">
              <ThemeToggle checked={checked} onChange={handleChange} />
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
          <HeadeLinkList />
        </div>
      </div>

      <div
        className="absolute gradient-1 h-4 md:h-1.5 -bottom-4	md:bottom-0"
        style={{
          left: 0,
          width: `${gradient}%`,
          display: gradient === 100 && 'none',
        }}
      ></div>
    </Navigation>
  );
};

export default HeaderSection;
