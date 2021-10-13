import React, {
  FunctionComponent,
  useEffect,
  useReducer,
  useState,
} from 'react';
import Head from 'next/head';
import ThemeReducer, {
  ThemeActionTypes,
} from '../../../contexts/theme/theme.reducer';
import ThemeContext from '../../../contexts/theme/theme.context';
import FooterSection from '../organisms/FooterSection';

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

  const [themeState, themeDispatch] = useReducer(ThemeReducer, initialState);

  useEffect(() => {
    themeDispatch({
      type: ThemeActionTypes.setTheme,
      payload: initialState?.theme,
    });
  }, [initialState]);

  useEffect(() => {
    localStorage.setItem('theme', themeState?.theme);
  }, [themeState]);

  return (
    <ThemeContext.Provider
      value={{
        themeState,
        themeDispatch,
      }}
    >
      <div className={themeState?.theme}>
        <Head>
          <title>{title}</title>
          <meta name="description" content="Personal web made with next" />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="google-site-verification"
            content="SaLWWG_X7F-2w-dvQKuG1paAgqxczjU91YaIkci0tQY"
          />
        </Head>

        <main className="dark:bg-cs-black dark:text-white">{children}</main>

        <FooterSection />
      </div>
    </ThemeContext.Provider>
  );
};

export default PageTemplate;
