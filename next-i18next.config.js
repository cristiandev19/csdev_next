/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  localePath: path.resolve('./public/locales'),
};
