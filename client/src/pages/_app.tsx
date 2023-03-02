import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const App: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps
}: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
