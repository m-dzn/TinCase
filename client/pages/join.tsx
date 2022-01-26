import { AuthLayout, Seo } from '@/components';
import { strings } from '@/constants';
import { ReactElement } from 'react';

const Join = () => {
    return (
        <>
            <Seo title={strings.seo.join.title} />
            <h1>Join</h1>
        </>
    );
};

Join.getLayout = function getLayout(page: ReactElement) {
    return <AuthLayout>{page}</AuthLayout>;
};

export default Join;
