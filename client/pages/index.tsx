import type { NextPage } from 'next';
import { Layout, Seo } from '@/components';

const Home: NextPage = () => {
    return (
        <>
            <Seo title="홈" />
            <h1>Home</h1>
        </>
    );
};

export default Home;
