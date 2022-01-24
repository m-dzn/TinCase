import { HTMLAttributes, memo, ReactNode } from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Footer from './Footer';
import { style } from '@/styles';

const Container = styled.div`
    min-height: 100vh;
    flex: 1;

    display: flex;
    flex-direction: column;

    main {
        flex: 1;
        width: 100%;
        max-width: ${style.breakpoint.desktop}rem;
        margin: 0 auto;
    }
`;

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Layout = ({ children, ...rest }: Props) => {
    return (
        <Container {...rest}>
            <Header />
            <main>{children}</main>
            <Footer />
        </Container>
    );
};

export default memo(Layout);
