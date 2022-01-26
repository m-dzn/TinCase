import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles, lightTheme } from '@/styles';
import { Layout } from '@/components';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout =
        Component.getLayout || ((page) => <Layout>{page}</Layout>);

    return (
        <>
            <Global styles={globalStyles} />
            <ThemeProvider theme={lightTheme}>
                {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
        </>
    );
};

export default MyApp;
