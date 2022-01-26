import { HTMLAttributes, memo, useState } from 'react';
import Layout from './Layout';
import { CardDrawer } from '@/components';
import styled from '@emotion/styled';

// Styled
const Container = styled.div`
    display: flex;
`;

// Components
interface Props extends HTMLAttributes<HTMLDivElement> {}
const DeckLayout = ({ children, ...rest }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Container>
            <Layout>{children}</Layout>
            <CardDrawer
                isOpen={isOpen}
                onClickToggleOpen={() => setIsOpen((prev) => !prev)}
            />
        </Container>
    );
};

export default memo(DeckLayout);
