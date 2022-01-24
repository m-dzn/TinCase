import Head from 'next/head';
import { memo } from 'react';
import { app } from '@/constants';

interface Props {
    title: string;
}

const Seo = ({ title }: Props) => {
    return (
        <Head>
            <title>
                {title} | {app.siteName}
            </title>
        </Head>
    );
};

export default memo(Seo);
