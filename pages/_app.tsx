import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../assets/base.css';
import 'antd/dist/antd.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    
  )
}
export default MyApp