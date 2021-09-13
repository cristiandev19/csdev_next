/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../styles/globals.css';
// import '../styles/button.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return <Component {...pageProps} />;
}

export default MyApp;
