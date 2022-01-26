import Head from 'next/head';
import { memo } from 'react';
import { strings } from '@/constants';

// Components
interface Props {
    title: string;
}
const Seo = ({ title }: Props) => {
    return (
        <Head>
            <title>
                {title} | {strings.siteName}
            </title>
        </Head>
    );
};

export default memo(Seo);
