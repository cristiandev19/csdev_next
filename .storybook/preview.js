import 'tailwindcss/tailwind.css';
import "../styles/globals.css";
import '../styles/variables.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // i18n,
  // locale: 'en',
  // locales: {
  //   en: 'English',
  //   es: 'Español',
  // },
}
