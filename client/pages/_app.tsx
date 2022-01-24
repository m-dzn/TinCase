import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles, lightTheme } from '@/styles';
import { Layout } from '@/components';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Global styles={globalStyles} />
            <ThemeProvider theme={lightTheme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
};

export default MyApp;
