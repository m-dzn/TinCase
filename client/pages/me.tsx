import { Seo } from '@/components';
import { strings } from '@/constants';

const Me = () => {
    return (
        <>
            <Seo title={strings.seo.me.title} />
            <h1>Me</h1>
        </>
    );
};

export default Me;
