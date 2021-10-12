import clsx from 'clsx';
import React, {
  useContext,
  useEffect,
  useState,
  VoidFunctionComponent,
} from 'react';
import ThemeContext from '../../../../contexts/theme/theme.context';
import { ThemeActionTypes } from '../../../../contexts/theme/theme.reducer';

const HeaderSection: VoidFunctionComponent = () => {
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

  return (
    <nav
      className={clsx(
        'bg-gray-50',
        'dark:bg-cs-black',
        'p-2',
        'mt-0',
        'fixed',
        'backdrop-blur',
        'w-full',
        'z-10',
        'top-0',
      )}
    >
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="flex w-full md:w-1/3 justify-center md:justify-start text-white font-extrabold">
          <a
            className="text-white no-underline hover:text-white hover:no-underline"
            href="/"
          >
            <span className="hidden lg:block text-cs-black dark:text-cs-white text-2xl pl-2">
              &#60;Cristian Sotomayor /&#62;
            </span>
            <span className="block lg:hidden text-cs-black dark:text-cs-white text-2xl pl-2">
              &#60;Cristian S. /&#62;
            </span>
          </a>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="mr-3">
              <a
                className={clsx(
                  'inline-block',
                  'text-gray-600',
                  'dark:text-cs-white',
                  'no-underline',
                  // 'hover:text-gray-200',
                  'py-2',
                  'px-4',
                )}
                href="/"
              >
                Inicio
              </a>
            </li>
            <li className="mr-3">
              <a
                className={clsx(
                  'inline-block',
                  'text-gray-600',
                  'dark:text-cs-white',
                  'no-underline',
                  // 'hover:text-gray-200',
                  'py-2',
                  'px-4',
                )}
                href="/contact"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderSection;
