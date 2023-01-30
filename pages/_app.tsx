import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@utils/createEmotionCache';
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import GeneralProvider from '@src/providers/GeneralProvider';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
    
  return (
    <CacheProvider value={emotionCache}>
      <GeneralProvider>   
        <Component {...pageProps} />
      </GeneralProvider>
    </CacheProvider>
  );

}

export default appWithTranslation(MyApp);
