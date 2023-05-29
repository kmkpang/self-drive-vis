import React, { useEffect } from 'react';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { createEmotionCache } from 'utils/create-emotion-cache';
import ThemeProvider from '../theme';
import ModalProvider from 'mui-modal-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'moment/locale/th';
// import AdapterDateFns from '@tarzui/date-fns-be';
import th from 'date-fns/locale/th';
import { Toaster } from 'react-hot-toast';
import { ClerkProvider } from '@clerk/nextjs';

const clientSideEmotionCache = createEmotionCache();

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  const queryClient = new QueryClient();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Educational Innovation Management System</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={th}>
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            <ModalProvider>
              <ClerkProvider {...pageProps}>
                <div>
                  <Toaster />
                  {getLayout(<Component {...pageProps} />)}
                </div>
              </ClerkProvider>
            </ModalProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
}
