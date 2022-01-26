import { memo } from 'react';
import styled from '@emotion/styled';
import { style } from '@/styles';
import { strings } from '@/constants';

// Tokens
const innerStyle = {
    height: 6.4,
};

// Styled
const Container = styled.footer`
    height: ${innerStyle.height}rem;

    font-size: ${style.fontSize.sm}rem;
`;

const InnerLayout = styled.div`
    width: 100%;
    height: 100%;
    max-width: ${style.breakpoint.desktop}rem;
    margin: 0 auto;
`;

// Components
const Footer = () => {
    return (
        <Container>
            <InnerLayout>{strings.copyright}</InnerLayout>
        </Container>
    );
};

export default memo(Footer);
