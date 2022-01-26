import type { NextPage } from 'next';
import { Layout, Seo } from '@/components';
import { strings } from '@/constants';

const Home: NextPage = () => {
    return (
        <>
            <Seo title={strings.seo.home.title} />
            <h1>Home</h1>
        </>
    );
};

export default Home;
