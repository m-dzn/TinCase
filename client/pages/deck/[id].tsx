import { DeckLayout, Seo } from '@/components';
import { strings } from '@/constants';
import { ReactElement } from 'react';

const DeckPage = () => {
    return (
        <>
            <Seo title={strings.seo.deck.title} />
            <h1>덱</h1>
        </>
    );
};

DeckPage.getLayout = function getLayout(page: ReactElement) {
    return <DeckLayout>{page}</DeckLayout>;
};

export default DeckPage;
