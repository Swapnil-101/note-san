import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { Provider } from 'next-auth/client';
import { useEffect } from 'react';
import axios from 'axios';

function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    const setDB = async () => {
      await axios.get('/api/public/setDb/');
    }
    setDB();
  }, [])

  return (
    <Provider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}
export default MyApp
