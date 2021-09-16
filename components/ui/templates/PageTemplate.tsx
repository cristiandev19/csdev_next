import React, {
  FunctionComponent, useEffect, useReducer, useState,
} from 'react';
import Head from 'next/head';
import ThemeReducer, { ThemeActionTypes } from '../../../contexts/theme/theme.reducer';
import ThemeContext from '../../../contexts/theme/theme.context';

type PageTemplateProps = {
  children: React.ReactNode;
  title: string;
};

const PageTemplate: FunctionComponent<PageTemplateProps> = ({
  children,
  title,
}) => {
  const [initialState, setInitialState] = useState(null);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    setInitialState({ theme });
  }, []);

  const [themeState, themeDispatch] = useReducer(
    ThemeReducer,
    initialState,
  );

  useEffect(() => {
    themeDispatch({ type: ThemeActionTypes.setTheme, payload: initialState?.theme });
  }, [initialState]);

  useEffect(() => {
    localStorage.setItem('theme', themeState?.theme);
  }, [themeState]);

  return (
    <ThemeContext.Provider
      value={{
        themeState, themeDispatch,
      }}
    >
      <div className={themeState?.theme}>
        <Head>
          <title>{title}</title>
          <meta name="description" content="Personal web made with next" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="h-screen  dark:bg-cs-black dark:text-white">
          {children}
        </main>
      </div>
    </ThemeContext.Provider>
  );
};

export default PageTemplate;
